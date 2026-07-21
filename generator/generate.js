const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SITE = {
  name: '転職プラス',
  url: 'https://tensyoku-select.com',
};

const AFFILIATE_TOP = `
<div style="background:#1e1b4b;border:2px solid #4f46e5;border-radius:8px;padding:20px;margin:24px 0;">
  <p style="font-weight:bold;color:#a5b4fc;margin:0 0 4px;font-size:12px;">【PR】ITエンジニア・ハイクラス転職</p>
  <p style="font-weight:bold;color:#fff;margin:0 0 12px;font-size:18px;">年収UP転職ならTechGO（テックゴー）</p>
  <a href="https://px.a8.net/svt/ejp?a8mat=4B648M+5KN3N6+5B0Y+HV7V6" rel="nofollow" style="display:inline-block;background:#4f46e5;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:16px;">▶ ITエンジニアの転職なら【TechGO】無料登録</a>
  <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B648M+5KN3N6+5B0Y+HV7V6" alt="">
</div>
<div style="background:#fff7ed;border:2px solid #ea580c;border-radius:8px;padding:16px;margin:24px 0;">
  <p style="font-weight:bold;color:#c2410c;margin:0 0 8px;">【PR】転職エージェントを無料でマッチング</p>
  <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B7QWT+A2L06Q+5BJK+5YJRM" rel="nofollow" style="display:inline-block;background:#ea580c;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 完全無料でパーソナルマッチング【転職AGENT Navi】</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4B7QWT+A2L06Q+5BJK+5YJRM" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B7QWT+A2L06Q+5BJK+5YRHE" rel="nofollow" style="display:inline-block;background:#c2410c;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 転職サポートのプロに出会える【転職エージェントナビ】</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4B7QWT+A2L06Q+5BJK+5YRHE" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B7QWT+9U8XPU+5PN2+BWVTE" rel="nofollow" style="display:inline-block;background:#9a3412;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 元人事のプロが専属サポート【Agent Kikkake】</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4B7QWT+9U8XPU+5PN2+BWVTE" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648K+F7QUV6+5SN4+5YJRM" rel="nofollow" style="display:inline-block;background:#1d4ed8;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 未経験OK・3か月研修でエンジニア転職【BREXA SOLVIA】</a><img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4B648K+F7QUV6+5SN4+5YJRM" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648K+9FD3LE+5W6C+BWVTE" rel="nofollow" style="display:inline-block;background:#0f766e;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 人材業界転職のプロが全力サポート【HR CAREER AGENT】</a><img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4B648K+9FD3LE+5W6C+BWVTE" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648M+4S2ALU+5N98+BWVTE" rel="nofollow" style="display:inline-block;background:#7c3aed;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ SAPコンサル・SAPエンジニア転職【SAPテンショク】</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4B648M+4S2ALU+5N98+BWVTE" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648M+5OT4VM+5P1E+5YJRM" rel="nofollow" style="display:inline-block;background:#059669;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 自分らしく働けるエンジニア転職【strategy career】</a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B648M+5OT4VM+5P1E+5YJRM" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648K+9E68DU+5S0C+5YJRM" rel="nofollow" style="display:inline-block;background:#475569;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 100%個人起点のキャリア相談・転職支援【ミライフ】</a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B648K+9E68DU+5S0C+5YJRM" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648M+4DRW36+3IZO+HZI6Q" rel="nofollow" style="display:inline-block;background:#0369a1;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 社内SEへ転職するなら【社内SE転職ナビ】</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4B648M+4DRW36+3IZO+HZI6Q" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648M+4A7AGI+3SWM+5YJRM" rel="nofollow" style="display:inline-block;background:#6d28d9;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ ITエンジニア専門転職エージェント【TechClipsエージェント】</a><img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4B648M+4A7AGI+3SWM+5YJRM" alt=""></li>
    <li><a href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3774934&pid=892653506" rel="nofollow" style="display:inline-block;background:#b45309;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 40〜50代のIT人材向け転職支援【エイジレスエージェント】</a><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3774934&pid=892653506" height="1" width="1" border="0" alt=""></li>
    <li><a href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3774934&pid=892653509" rel="nofollow" style="display:inline-block;background:#0f766e;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 看護師求人ならMCナースネット【会員登録キャンペーン】</a><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3774934&pid=892653509" height="1" width="1" border="0" alt=""></li>
    <li><a href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3774934&pid=892653510" rel="nofollow" style="display:inline-block;background:#1d4ed8;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 看護師の長期派遣求人【スーパーナース】</a><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3774934&pid=892653510" height="1" width="1" border="0" alt=""></li>
    <li><a href="//af.moshimo.com/af/c/click?a_id=5664377&p_id=7494&pc_id=21647&pl_id=93970" rel="nofollow" referrerpolicy="no-referrer-when-downgrade" style="display:inline-block;background:#f97316;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ AI鬼管理｜Claude Code活用の業務自動化トレーニング【無料】</a><img src="//i.moshimo.com/af/i/impression?a_id=5664377&p_id=7494&pc_id=21647&pl_id=93970" width="1" height="1" style="border:none;" loading="lazy"></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648K+DNS402+529E+HV7V6" rel="nofollow" style="display:inline-block;background:#3b82f6;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 未経験からのPython転職【Python Winner｜マンツーマンレッスン】</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4B648K+DNS402+529E+HV7V6" alt=""></li>
  </ul>
</div>`;

const AFFILIATE_BOTTOM = `
<div style="background:#fffbeb;border:2px solid #d97706;border-radius:8px;padding:16px;margin:24px 0;">
  <p style="font-weight:bold;color:#92400e;margin:0 0 12px;">📚 転職成功者が読んだおすすめ本</p>
  <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
    <li><a href="https://www.amazon.co.jp/dp/4839990972?linkCode=ll2&tag=mirainikibouw-22&linkId=01224d59701a0621c0fb752ee3419268&ref_=as_li_ss_tl" rel="nofollow" target="_blank" style="color:#1d4ed8;text-decoration:underline;">▶ 採用獲得のメソッド はじめての転職ガイド【Amazon】</a></li>
    <li><a href="https://www.amazon.co.jp/dp/4046076690?linkCode=ll2&tag=mirainikibouw-22&linkId=a872303777fd021430fc5401bfd9e936&ref_=as_li_ss_tl" rel="nofollow" target="_blank" style="color:#1d4ed8;text-decoration:underline;">▶ 人生が圧倒的に豊かになるキャリア戦略【Amazon】</a></li>
    <li><a href="https://www.amazon.co.jp/dp/4594098215?linkCode=ll2&tag=mirainikibouw-22&linkId=4a11ca89cbe597ac2cc0b0e1d1192f88&ref_=as_li_ss_tl" rel="nofollow" target="_blank" style="color:#1d4ed8;text-decoration:underline;">▶ 転職する勇気 「強み」がない人のための転職活動攻略マニュアル【Amazon】</a></li>
  </ul>
</div>
<div style="background:#fff0f0;border:2px solid #e00;border-radius:8px;padding:16px;margin:24px 0;">
  <p style="font-weight:bold;color:#c00;margin:0 0 12px;">🛒 楽天で人気の転職関連本</p>
  <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
    <li><a href="https://hb.afl.rakuten.co.jp/ichiba/5570f8cd.82e98484.5570f8ce.5b744630/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18268475%2F&link_type=text&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJ0ZXh0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="color:#c00;text-decoration:underline;">▶ 退職・転職前後にやっておくべき「お金」のチェックノート【楽天ブックス】</a></li>
    <li><a href="https://hb.afl.rakuten.co.jp/ichiba/5570f8cd.82e98484.5570f8ce.5b744630/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16301757%2F&link_type=text&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJ0ZXh0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="color:#c00;text-decoration:underline;">▶ 成功する転職面接 成否の9割は「準備」の質で決まる【楽天ブックス】</a></li>
  </ul>
</div>`;

async function generateArticle() {
  const topicsPath = path.join(__dirname, '..', 'unused-topics.json');
  const contentDir = path.join(__dirname, '..', 'content');

  const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf-8'));
  const existingFiles = new Set(fs.readdirSync(contentDir));

  const topic = topics.find(t => !existingFiles.has(t.filename));
  if (!topic) {
    console.log('全トピック生成完了');
    process.exit(0);
  }

  console.log(`生成中: ${topic.title}`);

  const today = new Date().toISOString().split('T')[0];

  const prompt = `あなたは転職メディア「${SITE.name}」の専門ライターです。
SEOに最適化された転職情報記事を生成してください。

トピック: ${topic.title}
カテゴリ: ${topic.category}

以下のJSON形式のみで出力してください（前後に余分なテキスト不要）:
{
  "title": "タイトル（SEO最適化、40〜60文字、年や具体的な数字を含める）",
  "description": "メタディスクリプション（120文字以内、検索意図に合わせる）",
  "category": "${topic.category}",
  "date": "${today}",
  "content": "HTMLコンテンツ"
}

contentの要件:
- 2500文字以上のHTML本文
- h2見出しを5〜8個、必要に応じてh3も使用
- ul/ol/liリスト、tableを積極的に活用
- 具体的な数字・年収・成功率などを含める
- 読者の疑問に答える実践的な内容
- JSON文字列として正しくエスケープ（"は\\"、改行は\\n）`;

  let article = null;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const message = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 4000,
        messages: [{ role: 'user', content: prompt }],
      });
      const text = message.content[0].text.trim();
      console.log(`試行${attempt} 先頭200文字:`, text.slice(0, 200));
      const cleaned = text.replace(/```json\s*/g, '').replace(/```\s*/g, '');
      const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        article = JSON.parse(jsonMatch[0]);
        break;
      }
      console.log(`試行${attempt}: JSONが見つかりません`);
    } catch (err) {
      console.log(`試行${attempt}エラー: ${err.message}`);
    }
    if (attempt < 3) await new Promise(r => setTimeout(r, 3000));
  }

  if (!article) {
    console.log('3回失敗のためトピックをスキップします');
    const remaining = topics.filter(t => t.filename !== topic.filename);
    fs.writeFileSync(topicsPath, JSON.stringify(remaining, null, 2));
    process.exit(0);
  }

  if (article.content.includes('<h2')) {
    article.content = article.content.replace('<h2', AFFILIATE_TOP + '<h2');
  } else {
    article.content = AFFILIATE_TOP + article.content;
  }
  article.content = article.content + AFFILIATE_BOTTOM;

  fs.writeFileSync(
    path.join(contentDir, topic.filename),
    JSON.stringify(article, null, 2)
  );

  const remaining = topics.filter(t => t.filename !== topic.filename);
  fs.writeFileSync(topicsPath, JSON.stringify(remaining, null, 2));

  console.log(`完了: ${topic.filename}`);
}

generateArticle().catch(err => {
  console.error('エラー:', err.message);
  process.exit(1);
});

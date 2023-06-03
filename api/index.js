var express = require('express');
var router = express.Router();
import { readFileSync } from 'fs';
import path from 'path';

/* GET home page. */
router.get('/', async (req, res) => {
  
  try {
    var pageId = req.query.id;
    
    //res.setHeader('Content-Type', 'application/json');
    //return res.end(stringified);
    
    var agent = req['headers']['user-agent'].toLowerCase();
    var isFacebook = agent.indexOf('vision') > -1 || agent.indexOf('facebook') > -1;
    if(!isFacebook) {
      
      res.setHeader('Content-Type', 'text/html');
      res.send(`
          <html lang="en-US">
            <head>
            <title>Vercel.com</title>
              <link rel="canonical" href="https://${hostName}/api/index?id=${pageId}" />
            </head>
            <script> window.location.href="https://www.gifvi.com/embed?v=${pageId}" </script>
          </html>
       `);
      
      /*
        res.writeHead(302, {
            'Location': 'https://www.gifvi.com/embed?v='+ pageId,
        });
        res.end();
        return;
        */
    }else{
      var hostName = req.get('host');

      /*
      var file = path.join(process.cwd(), 'public', `${pageId}.json`);
      var jsonData = readFileSync(file, 'utf8');
      var obj = JSON.parse(jsonData);
      var title = obj.videotitle;
      var publishedDate = obj.pubdate;
      */
     
      res.setHeader('Content-Type', 'text/html');
      res.send(`
          <title>${hostName}</title>
          <link rel="canonical" href="https://${hostName}/api/index?id=${pageId}" />
          <meta property="og:type" content="article" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:updated_time" content="" />
          <meta property="og:title" content="(Video)" />
          <meta property="og:description" content="" />
          <meta property="fb:app_id" content="134618774916007" />
          <meta property="og:site_name" content="${hostName}" />
          <meta property="og:url" content="https://${hostName}/api/index?id=${pageId}" />
          <meta property="og:image" content="https://www.gifvi.com/thumbs/${pageId}.jpg" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width"       content="1280" />
          <meta property="og:image:height"       content="720" />
  `); 
  }
  
  /*
    var file = path.join(process.cwd(), 'public', `${pageId}.json`);
    var jsonData = readFileSync(file, 'utf8');
    var obj = JSON.parse(jsonData);
    var title = obj.videotitle;
    var publishedDate = obj.pubdate;
    
    res.json({
      status: title,
      message: publishedDate,
    });
  */
    
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;

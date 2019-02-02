
module.exports = {
  html : function(tatle,list,body,data){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${tatle}</title>
      <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="/">Web</a></h1>
      ${list}
      ${data}
      ${body}
      <p>
      </p>
    </body>
    </html>
    `;
  },list :function(filelist){
    var list = '<ul>';
    var i = 0
    while (i< filelist.length) {
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i= i + 1;
    }
    list = list + '</ul>';
    return list
  }
}

function domainName(url){
  url = url.replace(/(^\w+:|^)\/\//, '');
  url = url.replace(/^www\./, '');
  const domainNameMatch = url.match(/(?:[^./]+\.)?([^./]+\.[^./]+)/);
  return domainNameMatch[0].split('.')[0]
}
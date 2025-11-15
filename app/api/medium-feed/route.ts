import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://medium.com/feed/@kamaliki');
    const xmlText = await response.text();
    
    // Parse RSS XML
    const articles = parseRSSFeed(xmlText);
    
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching Medium feed:', error);
    return NextResponse.json([], { status: 500 });
  }
}

function parseRSSFeed(xmlText: string) {
  const articles: any[] = [];
  
  // Simple regex-based XML parsing for RSS items
  const itemRegex = /<item>[\s\S]*?<\/item>/g;
  const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>/;
  const linkRegex = /<link>(.*?)<\/link>/;
  const pubDateRegex = /<pubDate>(.*?)<\/pubDate>/;
  const descriptionRegex = /<description><!\[CDATA\[(.*?)\]\]><\/description>/;
  
  const items = xmlText.match(itemRegex) || [];
  
  for (const item of items) {
    
    const titleMatch = titleRegex.exec(item);
    const linkMatch = linkRegex.exec(item);
    const pubDateMatch = pubDateRegex.exec(item);
    const descriptionMatch = descriptionRegex.exec(item);
    
    if (titleMatch && linkMatch && pubDateMatch) {
      articles.push({
        title: titleMatch[1],
        link: linkMatch[1],
        pubDate: pubDateMatch[1],
        description: descriptionMatch ? descriptionMatch[1] : ''
      });
    }
  }
  
  return articles;
}
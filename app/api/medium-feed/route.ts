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
  const itemRegex = /<item>(.*?)<\/item>/gs;
  const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>/s;
  const linkRegex = /<link>(.*?)<\/link>/s;
  const pubDateRegex = /<pubDate>(.*?)<\/pubDate>/s;
  const descriptionRegex = /<description><!\[CDATA\[(.*?)\]\]><\/description>/s;
  
  let match;
  while ((match = itemRegex.exec(xmlText)) !== null) {
    const itemContent = match[1];
    
    const titleMatch = titleRegex.exec(itemContent);
    const linkMatch = linkRegex.exec(itemContent);
    const pubDateMatch = pubDateRegex.exec(itemContent);
    const descriptionMatch = descriptionRegex.exec(itemContent);
    
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
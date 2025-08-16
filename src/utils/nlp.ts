import { QueryParameters, Product } from '../types';

// Natural Language Processing utilities for chat interface
export class NLPProcessor {
  private static itemKeywords: Record<string, string[]> = {
    kurti: ['kurti', 'kurta', 'tunic'],
    dress: ['dress', 'frock', 'gown'],
    shirt: ['shirt', 'top', 'blouse'],
    saree: ['saree', 'sari'],
    lehenga: ['lehenga', 'ghagra'],
    anarkali: ['anarkali'],
    sherwani: ['sherwani'],
    jacket: ['jacket', 'blazer'],
    tshirt: ['tshirt', 't-shirt', 'tee']
  };

  private static colorKeywords: string[] = [
    'red', 'blue', 'yellow', 'green', 'black', 'white', 'pink', 
    'purple', 'orange', 'grey', 'gray', 'brown', 'navy', 'maroon'
  ];

  private static sizeKeywords: string[] = [
    'xs', 's', 'm', 'l', 'xl', 'xxl', 'small', 'medium', 'large',
    '2-3y', '4-5y', '6-7y', '8-9y', '10-11y'
  ];

  private static categoryKeywords: Record<string, string[]> = {
    men: ['men', 'male', 'man', 'mens', 'boy', 'boys'],
    women: ['women', 'female', 'woman', 'womens', 'girl', 'girls', 'ladies'],
    kids: ['kids', 'children', 'child', 'baby', 'toddler']
  };

  private static styleKeywords: Record<string, string[]> = {
    traditional: ['traditional', 'ethnic', 'indian', 'desi', 'festive'],
    western: ['western', 'casual', 'formal', 'modern']
  };

  static extractParameters(query: string): QueryParameters {
    const lowerQuery = query.toLowerCase();
    const parameters: QueryParameters = {};

    // Extract item type
    for (const [item, keywords] of Object.entries(this.itemKeywords)) {
      if (keywords.some(keyword => lowerQuery.includes(keyword))) {
        parameters.itemType = item;
        break;
      }
    }

    // Extract color
    for (const color of this.colorKeywords) {
      if (lowerQuery.includes(color)) {
        parameters.color = color;
        break;
      }
    }

    // Extract size
    for (const size of this.sizeKeywords) {
      if (lowerQuery.includes(size.toLowerCase())) {
        parameters.size = size.toUpperCase();
        break;
      }
    }

    // Extract category
    for (const [category, keywords] of Object.entries(this.categoryKeywords)) {
      if (keywords.some(keyword => lowerQuery.includes(keyword))) {
        parameters.category = category.charAt(0).toUpperCase() + category.slice(1) as 'Men' | 'Women' | 'Kids';
        break;
      }
    }

    // Extract style
    for (const [style, keywords] of Object.entries(this.styleKeywords)) {
      if (keywords.some(keyword => lowerQuery.includes(keyword))) {
        parameters.style = style.charAt(0).toUpperCase() + style.slice(1) as 'Traditional' | 'Western';
        break;
      }
    }

    // Extract price range
    const priceMatches = lowerQuery.match(/(?:under|below|less than|<)\s*(?:rs\.?|₹)?\s*(\d+)/i);
    if (priceMatches) {
      parameters.priceRange = { max: parseInt(priceMatches[1]) };
    }

    const rangeMatches = lowerQuery.match(/(?:between|from)\s*(?:rs\.?|₹)?\s*(\d+)\s*(?:to|and|-)\s*(?:rs\.?|₹)?\s*(\d+)/i);
    if (rangeMatches) {
      parameters.priceRange = {
        min: parseInt(rangeMatches[1]),
        max: parseInt(rangeMatches[2])
      };
    }

    const overMatches = lowerQuery.match(/(?:over|above|more than|>)\s*(?:rs\.?|₹)?\s*(\d+)/i);
    if (overMatches) {
      parameters.priceRange = { min: parseInt(overMatches[1]) };
    }

    return parameters;
  }

  static generateResponse(parameters: QueryParameters, products: Product[]): string {
    let response = "I found ";
    
    if (products.length === 0) {
      return "I couldn't find any products matching your criteria. Try adjusting your search parameters.";
    }

    if (products.length === 1) {
      response += "1 product";
    } else {
      response += `${products.length} products`;
    }

    const details: string[] = [];
    
    if (parameters.itemType) {
      details.push(`${parameters.itemType}s`);
    }
    
    if (parameters.color) {
      details.push(`in ${parameters.color}`);
    }
    
    if (parameters.priceRange) {
      if (parameters.priceRange.max && !parameters.priceRange.min) {
        details.push(`under ₹${parameters.priceRange.max}`);
      } else if (parameters.priceRange.min && !parameters.priceRange.max) {
        details.push(`over ₹${parameters.priceRange.min}`);
      } else if (parameters.priceRange.min && parameters.priceRange.max) {
        details.push(`between ₹${parameters.priceRange.min}-₹${parameters.priceRange.max}`);
      }
    }
    
    if (parameters.category) {
      details.push(`for ${parameters.category.toLowerCase()}`);
    }
    
    if (parameters.style) {
      details.push(`in ${parameters.style.toLowerCase()} style`);
    }

    if (details.length > 0) {
      response += ` ${details.join(' ')}`;
    }

    response += ". Here are some great options for you:";
    
    return response;
  }
}
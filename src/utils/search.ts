import { Product, SearchFilters, QueryParameters } from '../types';
import { sampleProducts } from '../data/products';

export class SearchEngine {
  private products: Product[] = sampleProducts;

  search(filters: SearchFilters): Product[] {
    let results = [...this.products];

    // Apply category filter
    if (filters.category && filters.category !== 'All') {
      results = results.filter(product => product.category === filters.category);
    }

    // Apply style filter
    if (filters.style && filters.style !== 'All') {
      results = results.filter(product => product.style === filters.style);
    }

    // Apply price range filter
    if (filters.minPrice !== undefined) {
      results = results.filter(product => product.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      results = results.filter(product => product.price <= filters.maxPrice!);
    }

    // Apply color filter
    if (filters.color && filters.color !== 'All') {
      results = results.filter(product => 
        product.color.toLowerCase().includes(filters.color!.toLowerCase())
      );
    }

    // Apply size filter
    if (filters.size && filters.size !== 'All') {
      results = results.filter(product => 
        product.sizes.some(size => 
          size.toLowerCase().includes(filters.size!.toLowerCase())
        )
      );
    }

    // Apply text query filter with fuzzy matching
    if (filters.query) {
      const query = filters.query.toLowerCase();
      results = results.filter(product => {
        const searchText = [
          product.name,
          product.description,
          ...product.tags,
          product.color,
          product.category,
          product.style
        ].join(' ').toLowerCase();

        return searchText.includes(query) || 
               this.fuzzyMatch(query, searchText) ||
               product.tags.some(tag => this.fuzzyMatch(query, tag.toLowerCase()));
      });
    }

    return results;
  }

  searchByParameters(parameters: QueryParameters): Product[] {
    const filters: SearchFilters = {};

    if (parameters.category) {
      filters.category = parameters.category;
    }

    if (parameters.style) {
      filters.style = parameters.style;
    }

    if (parameters.color) {
      filters.color = parameters.color;
    }

    if (parameters.size) {
      filters.size = parameters.size;
    }

    if (parameters.priceRange) {
      filters.minPrice = parameters.priceRange.min;
      filters.maxPrice = parameters.priceRange.max;
    }

    if (parameters.itemType) {
      filters.query = parameters.itemType;
    }

    return this.search(filters);
  }

  private fuzzyMatch(query: string, text: string): boolean {
    // Simple fuzzy matching implementation
    const words = query.split(' ');
    return words.some(word => {
      if (word.length < 3) return text.includes(word);
      
      // Allow for some character differences
      for (let i = 0; i <= text.length - word.length; i++) {
        const substring = text.substring(i, i + word.length);
        const differences = this.levenshteinDistance(word, substring);
        if (differences <= Math.floor(word.length / 3)) {
          return true;
        }
      }
      return false;
    });
  }

  private levenshteinDistance(str1: string, str2: string): number {
    const matrix = Array(str2.length + 1).fill(null).map(() => 
      Array(str1.length + 1).fill(null)
    );

    for (let i = 0; i <= str1.length; i++) {
      matrix[0][i] = i;
    }

    for (let j = 0; j <= str2.length; j++) {
      matrix[j][0] = j;
    }

    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        if (str1[i - 1] === str2[j - 1]) {
          matrix[j][i] = matrix[j - 1][i - 1];
        } else {
          matrix[j][i] = Math.min(
            matrix[j - 1][i] + 1,
            matrix[j][i - 1] + 1,
            matrix[j - 1][i - 1] + 1
          );
        }
      }
    }

    return matrix[str2.length][str1.length];
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    if (category === 'All') return this.products;
    return this.products.filter(product => product.category === category);
  }

  getUniqueColors(): string[] {
    const colors = new Set(this.products.map(p => p.color));
    return Array.from(colors).sort();
  }

  getUniqueSizes(): string[] {
    const sizes = new Set(this.products.flatMap(p => p.sizes));
    return Array.from(sizes).sort();
  }
}

export const searchEngine = new SearchEngine();
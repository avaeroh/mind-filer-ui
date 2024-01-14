export interface Completion {
    id: string;
    object: string;
    created: number;
    model: Record<string, unknown>; // You might want to define a more specific type for 'model'
    choices: Choice[];
  }
  
  interface Choice {
    finish_reason: string;
    delta: {
      content: string;
    };
    message: {
      role: string;
      content: string;
    };
    sources: Source[];
    index: number;
  }
  
  interface Source {
    object: Record<string, unknown>; // You might want to define a more specific type for 'object'
    score: number;
    document: Document;
    text: string;
    previous_texts: string[];
    next_texts: string[];
  }
  
  interface Document {
    object: Record<string, unknown>; // You might want to define a more specific type for 'object'
    doc_id: string;
    doc_metadata: Record<string, unknown>; // You might want to define a more specific type for 'doc_metadata'
  }
  
  // Adjust the types according to the actual structure of your data
  
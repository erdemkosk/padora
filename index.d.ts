declare module 'padora' {
    type DataObject = { [key: string]: any };
  
    interface PadoraOptions {
      template: string;
      data: DataObject;
    }
  
    export default function padora({ template, data }: PadoraOptions): string;
  }
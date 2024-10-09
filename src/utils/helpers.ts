export const getNestedProp = (obj: Record<string, any>, path: string) =>
  path.split('.').reduce((acc, part) => acc && acc[part], obj);
interface FilterFieldOption {
  label: string;
  value: string;
  readOnly?: boolean;
  disabled?: boolean;
  [key: string]: any;
}

interface DefaultValueObject {
  min?: number;
  max?: number;
  [key: string]: any;
}

interface DefaultValueDateRange {
  start: string;
  end: string;
  [key: string]: any;
}

type DefaultValue = string[] | DefaultValueObject[] | DefaultValueDateRange;

interface FilterField {
  element: string;
  name: string;
  defaultValue?: DefaultValue;
  excludeTags?: string[];
  orientation?: "horizontal" | "vertical" | string;
  options?: FilterFieldOption[];
  readOnly?: boolean;
  columns?: number;
  range?: boolean;
  quiet?: boolean;
  label?: string;
  hideArrows?: boolean;
  [key: string]: any;
}

interface FilterGroup {
  fields: FilterField[];
  header: string;
  groupKey: string;
  [key: string]: any;
}

interface ConfigSchema {
  filterSchema?: FilterGroup[];
  aemTierType?: string[];
  apiKey?: string;
  repoNames?: string[];
  preferredDimensions?: {
    minWidth?: number;
    maxWidth?: 2000;
    minHeight?: 500;
    maxHeight?: 2000;
  };
};

import { Input } from "@/components/ui/input";
import { toNumber } from "lodash"

export type BaseFieldType<T> = T & {
  onChange: (value: any) => void;
  value: any;
};

export const TextFiedBase = (props: BaseFieldType<any>) => {
  return (
    <Input
      value={props.value}
      onChange={(e: any) =>
        props.onChange(
          e.target.type == "number"
            ? toNumber(e.target.value)
            : e.target.type == "file"
            ? e.target.files
            : e.target.value
        )
      }
      {...props}
    />
  );
};

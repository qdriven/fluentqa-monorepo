import { gql } from "graphql-request";
import { createDataType } from "./datatype";
import { Label_LabelFragment } from "../types";

type Label = {
  id: string;
  name: string;
  prefix: string;
  fullName: string;
  color: string;
  quantity: number;
};

export const Label = createDataType<Label_LabelFragment, Label>({
  fragment: gql`
    fragment Label_Label on Label {
      id
      name
      color
      issues {
        totalCount
      }
    }
  `,
  translator: (label) => {
    const [prefix, ...name] = label.name.split(":");
    return {
      id: label.id,
      name: name.join(":"),
      prefix: prefix,
      fullName: label.name,
      color: label.color,
      quantity: label.issues.totalCount,
    };
  },
});

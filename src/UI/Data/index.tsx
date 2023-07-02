import { ReactNode } from 'react';
import { Card, Progress } from 'antd';
import { isArray, isObject, isNumber } from '@/util/guards';
import { camelCaseToTitle } from '@/util/str';
import { percentage } from '@/util/number';

interface ObjData {
  [key: string]: ReactNode | ReactNode[] | ObjData | ObjData[];
}
interface DataProps {
  data: ReactNode | ReactNode[] | ObjData | ObjData[];
  step?: number;
  title?: ReactNode;
  totalKey?: string;
}

export const Data: React.FC<DataProps> = ({
  data,
  step = 0,
  title,
  totalKey,
}) => {
  const total = totalKey && isObject(data) && (data as ObjData)[totalKey];
  return (
    <Card title={title && camelCaseToTitle(title as string)}>
      {isArray(data) ? (
        data.map((d, i) => (
          <Data key={i.toString()} data={d} step={step + 20} />
        ))
      ) : isObject(data) ? (
        Object.keys(data).map((key) =>
          total && isNumber((data as ObjData)[key]) ? (
            <Card title={camelCaseToTitle(key)} key={key}>
              <Progress
                showInfo={
                  percentage(
                    (data as ObjData)[key] as number,
                    total as number
                  ) !== 100
                }
                percent={percentage(
                  (data as ObjData)[key] as number,
                  total as number
                )}
              />
              <span>{(data as ObjData)[key] as string}</span>
            </Card>
          ) : (
            <Data
              key={key}
              title={key}
              step={step + 20}
              data={(data as ObjData)[key]}
            />
          )
        )
      ) : (
        <span>{data}</span>
      )}
    </Card>
  );
};

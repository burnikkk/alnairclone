import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export const ButtonSelect = {
  Room: ({ value, onChange, className }: SelectProps) => (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={`rounded-full bg-[#f3f3f5] !text-[#1f1f1f] ${className}`}
      >
        <SelectValue placeholder="Количество комнат" />
      </SelectTrigger>
      <SelectContent className="max-h-60 max-w-55">
        <SelectItem value="studio">Студия</SelectItem>
        <SelectItem value="1">1 спальня</SelectItem>
        <SelectItem value="2">2 спальни</SelectItem>
        <SelectItem value="3">3 спальни</SelectItem>
        <SelectItem value="4">4 спальни</SelectItem>
        <SelectItem value="5">5 спален</SelectItem>
        <SelectItem value="6">6 спален</SelectItem>
        <SelectItem value="7">7 спален</SelectItem>
        <SelectItem value="8">8 спален</SelectItem>
        <SelectItem value="9">9 спален</SelectItem>
        <SelectItem value="10">10 спален</SelectItem>
        <SelectItem value="free_planing">Свободная планировка</SelectItem>
      </SelectContent>
    </Select>
  ),

  HouseType: ({ value, onChange, className }: SelectProps) => (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={`rounded-full bg-[#f3f3f5] !text-[#1F1F1F] ${className}`}
      >
        <SelectValue placeholder="Тип жилья" />
      </SelectTrigger>
      <SelectContent className="max-h-60 w-55">
        <SelectItem value="villa">Вилла</SelectItem>
        <SelectItem value="penthouse">Пентхаус</SelectItem>
        <SelectItem value="townhouse">Таунхаус</SelectItem>
        <SelectItem value="apartment">Апартаменты</SelectItem>
        <SelectItem value="studio">Студия</SelectItem>
        <SelectItem value="house">Дом</SelectItem>
      </SelectContent>
    </Select>
  ),

  SalesStatus: ({ value, onChange, className }: SelectProps) => (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={`rounded-full bg-[#f3f3f5] !text-[#1F1F1F] ${className}`}
      >
        <SelectValue placeholder="Статус продаж" />
      </SelectTrigger>
      <SelectContent className="max-h-60 w-55">
        <SelectItem value="anons">Анонс продаж</SelectItem>
        <SelectItem value="reg">Регистрация интереса(EOI)</SelectItem>
        <SelectItem value="startsales">Старт продаж</SelectItem>
        <SelectItem value="insales">В продаже</SelectItem>
        <SelectItem value="stopped">Приостановлен</SelectItem>
      </SelectContent>
    </Select>
  ),
};

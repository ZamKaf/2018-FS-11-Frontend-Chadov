import { GetReadableSize } from './sizes';

describe('Тип возврата', () => {
    it('Возвращает что-то', () => {
        expect(GetReadableSize(1)).not.toBeNaN();
    });

    it('Возвращает строку', () => {
        expect(GetReadableSize(0)).toMatch('');
    });

});

describe('Функция возвращает корректное значение', () => {
    it('1024 - это Килобайт', () => {
        expect(GetReadableSize(1024)).toBe('1 KBytes');
    });
    it('1024*1024 - это Мегабайт', () => {
        expect(GetReadableSize(1024*1024)).toBe('1 MBytes');
    });
    it('1024*1024*1024 - это Гагабайт', () => {
        expect(GetReadableSize(1024*1024*1024)).toBe('1 GBytes');
    });

    it('0 - это не Килобайт', () => {
        expect(GetReadableSize(0)).not.toMatch(/KBytes/);
    });
    it('0 - это не Магабайт', () => {
        expect(GetReadableSize(0)).not.toMatch(/MBytes/);
    });
    it('0 - это не Гигабайт', () => {
        expect(GetReadableSize(0)).not.toMatch(/GBytes/);
    });

});

describe('Функция принимает только валидные значения', () => {
    it('Объекты не кушаются', () => {
        expect(GetReadableSize({ prop: 'value' })).toBeFalsy();
    });

    it('Строки не кушаются', () => {
        expect(GetReadableSize('value')).toBeFalsy();
    });

    it('Нан не кушается', () => {
        expect(GetReadableSize(NaN)).toBeFalsy();
    });

    it('true не кушается', () => {
        expect(GetReadableSize(true)).toBeFalsy();
    });

    it('false не кушается', () => {
        expect(GetReadableSize(false)).toBeFalsy();
    });
    it('вызов без параметров не кушается', () => {
        expect(GetReadableSize()).toBeFalsy();
    });
    it('отрицательное значение не кушается', () => {
        expect(GetReadableSize(-42)).toBeFalsy();
    });
});


const howManyDays = require('../dist/index.min');

test(`某年某月有多少天`, () => {
    expect(howManyDays(2000)).toEqual(366);
    expect(howManyDays(2012)).toEqual(366);
    expect(howManyDays(2013)).toEqual(365);
    expect(howManyDays(2014)).toEqual(365);
    expect(howManyDays(2015)).toEqual(365);
    expect(howManyDays(2016)).toEqual(366);
    expect(howManyDays(2017)).toEqual(365);
    expect(howManyDays(2018)).toEqual(365);
    expect(howManyDays(2000, 2)).toEqual(29);
    expect(howManyDays(2012, 2)).toEqual(29);
    expect(howManyDays(2013, 2)).toEqual(28);
    expect(howManyDays(2014, 2)).toEqual(28);
    expect(howManyDays(2015, 2)).toEqual(28);
    expect(howManyDays(2016, 2)).toEqual(29);
    expect(howManyDays(2017, 2)).toEqual(28);
    expect(howManyDays(2018, 2)).toEqual(28);
});

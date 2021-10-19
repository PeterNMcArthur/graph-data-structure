import { guidedApproach, chaosApproach, isChildOf, shouldAddCompanyId } from './index';

describe('isChildOf', () => {
  test('is a child of the parent company', () => {
    const hasCompanyAsParent = { id: "c3", name: "Medium Corp A", parentId: "c1" };
    expect(isChildOf('c1')(hasCompanyAsParent)).toBe(true);
    expect(isChildOf('c2')(hasCompanyAsParent)).toBe(false);
  });
});

describe('chaosApproach', () => {
  test('Petes approach when left to his own decices', () => {
    const companies = [
      { id: "c1", name: "Big Corp A", parentId: null },
      { id: "c2", name: "Big Corp B", parentId: null },
      { id: "c3", name: "Medium Corp A", parentId: "c1" },
      { id: "c4", name: "Medium Corp B", parentId: "c2" },
      { id: "c5", name: "Small Corp A", parentId: "c3" },
      { id: "c6", name: "Small Corp B", parentId: "c3" },
    ];
  
    expect(chaosApproach(companies, ['c1'])).toEqual(['c1', 'c3', 'c5', 'c6']);
  });
});

describe('shouldAddCompanyId', () => {
  test('Get Nested Companies', () => {
    const companies = [
      { id: "c1", name: "Big Corp A", parentId: null },
      { id: "c2", name: "Big Corp B", parentId: null },
      { id: "c3", name: "Medium Corp A", parentId: "c1" },
      { id: "c4", name: "Medium Corp B", parentId: "c2" },
      { id: "c5", name: "Small Corp A", parentId: "c3" },
      { id: "c6", name: "Small Corp B", parentId: "c3" },
    ];
    expect(shouldAddCompanyId(['c1'], ['c1', 'c3'], companies[2])).toBe(false);
    expect(shouldAddCompanyId(['c1'], ['c1'], companies[2])).toBe(true);
    expect(shouldAddCompanyId(['c1'], [], companies[2])).toBe(true);
  });
});

describe('guidedApproach', () => {
  test('More guided discussed approach', () => {
    const companies = [
      { id: "c1", name: "Big Corp A", parentId: null },
      { id: "c2", name: "Big Corp B", parentId: null },
      { id: "c3", name: "Medium Corp A", parentId: "c1" },
      { id: "c4", name: "Medium Corp B", parentId: "c2" },
      { id: "c5", name: "Small Corp A", parentId: "c3" },
      { id: "c6", name: "Small Corp B", parentId: "c3" },
    ];
  
    expect(guidedApproach(companies, 'c1')).toEqual(['c1', 'c3', 'c5', 'c6']);
  });
});
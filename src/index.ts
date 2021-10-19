/*
The Problem

We would like you to change the below function to return which land parcels the given company owns (** directly and indirectly **).
 
When you are ready, please open any text-editor/IDE you wish, paste the code below, and share your screen so we can collaborate on the solution.
 
** Don't forget you can ask as many questions as you want. **

*/

type Company = {
  id: string,
  name: string,
  parentId: string,
};

export const isChildOf = (companyId: string) =>
  ({ parentId }: Company) =>
    companyId === parentId

export const guidedApproach = (
  companies: Company[],
  parentId: string,
) => {
  return companies
    .filter(isChildOf(parentId))
    .reduce(
      (acc, { id }) => [...acc, ...guidedApproach(companies, id)],
      [parentId]
    );
};

export const shouldAddCompanyId = (
  companyIds: string[],
  { id, parentId }: Company,
  newCompanyIds: string[],
) => companyIds.includes(parentId) && !newCompanyIds.includes(id)

export const chaosApproach = (
  companies: Company[],
  parentIds: string[],
) => companies
  .reduce((acc, company) =>
      shouldAddCompanyId(parentIds, company, acc)
        ? chaosApproach(companies, [...acc, company.id])
        : acc,
    parentIds);

/*
{
  ['c1', 'c3', 'c5', 'c6']
}
*/
// Implement the following function
//  E.g. getLandParcelsForCompany("c1") => ["l1","l3","l4","l5"]
const getLandParcelsForCompany = (companyId: string) => {
  return "TODO";
}

getLandParcelsForCompany('c1');

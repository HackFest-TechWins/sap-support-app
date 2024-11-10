using { sap.support.bot as support} from '../db/schema';

service SupportService {
  @odata.draft.bypass
  entity Questions as projection on support.Questions;
  
  @odata.draft.bypass
  entity Answers as projection on support.Answers;
}

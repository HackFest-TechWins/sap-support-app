using { sap.support.bot as support} from '../db/schema';

service SupportService {
  @odata.draft.enabled
  entity Questions as projection on support.Questions;
  
  @odata.draft.enabled
  entity Answers as projection on support.Answers;
}

service BotService {
  @odata.draft.bypass
  entity Questions as projection on support.Questions;
  
  @odata.draft.bypass
  entity Answers as projection on support.Answers;
}

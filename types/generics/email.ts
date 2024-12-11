export const useDefaultTo = (): string => "support@maesloic.fr";
export const useDefaultSubject = (): string => "Cashier - Courrier non catégorisé";
export const useDefaultAttachements = (): IEmailAttachement[] => [];

export interface IEmail {
  subject?: string;
  to?: string;
  template: IEmailTemplate;
  attachments?: IEmailAttachement[];
}
export interface IEmailTemplate {
  to?: string;
  subject?: string;
  text: string;
  html?: string;
  attachments?: IEmailAttachement[];
}
export interface IEmailAttachement {
  filename: string;
  path: string;
  contentType: string;
}

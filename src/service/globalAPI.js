export const API_URLS = {
    compose: {
      endpoint: "mail/send",
      method: "POST",
    },
    getEmailFromInbox: {
      endpoint: "mail/inbox",
      method: "GET",
    },
    getEmailFromSend:{
        endpoint: "mail/send",
        method: "GET",

    },
    getEmailFromDraft:{
        endpoint: "mail/getdraft",
        method: "GET",

    },
    getEmailFromStarred:{
        endpoint: "mail/starred",
        method: "GET",

    },
 
    getEmailFromTrash:{
        endpoint: "mail/trash",
        method: "GET",

    },
    saveDraftEmails: {
      endpoint: "mail/draft",
      method: "POST",
    },
    deleteEmail: {
      endpoint: "mail/delete/:messageid",
      method: "DELETE",
    },
    toggleStarredEmail:{
      endpoint: "mail/starred/:messageid",
      method: "POST",
    },
    deleteEmails:{
      endpoint:'delete',
      method: 'DELETE',
    }
  };
  
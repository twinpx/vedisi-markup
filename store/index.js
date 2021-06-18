export const state = () => ({
  uploadStatus: "form", //form, confirmation, uploading, success, error
  result: {},
  resultTitle: {
    checkType: [
      {
        code: "verifySignatureStatus",
        text: "Базовая проверка ЭП и цепочки сертификатов",
        value: "пройдена"
      },
      {
        code: "verifyChainStatus",
        text: "Дополнительная проверка цепочки сертификатов",
        value: "пройдена"
      },
      {
        code: "issuerAccreditation",
        text: "Статус аккредитации издателя сертификата",
        value: "установлен"
      },
      {
        code: "qualifiedSignature",
        text: "Электронная подпись",
        value: "является квалифицированной"
      },
      {
        code: "timeStampIssuerAccreditation",
        text: "Метка доверенного времени",
        value: "подтверждена"
      }
    ],
    dataType: [
      /*{
        code: "fromPDF",
        text: "Нахождение подписи:",
        value: {
          true: "Внутри PDF-документа",
          false: "В SIG-файле"
        }
      },*/
      {
        code: "type",
        text: "Тип подписи:"
      },
      {
        code: "signatureName",
        text: "Название подписи:"
      },
      {
        code: "coverWholeDocument",
        text: "Относится ко всему документу:",
        value: {
          true: "Да",
          false: "Нет"
        }
      },
      {
        code: "sigReason",
        text: "Основание подписи:"
      },
      {
        code: "sigLocation",
        text: "Место подписи:"
      },
      {
        code: "sigContact",
        text: "Контактные данные из подписи:"
      },
      {
        code: "sigDate",
        text: "Дата подписи из PDF:"
      },
      {
        code: "signingTime",
        text: "Дата подписи из самой подписи:"
      },
      {
        code: "signingTimestamp",
        text: "Дата подписи из внешнего штампа времени:"
      }
    ],
    personType: [
      {
        code: "subjectName",
        text: "Владелец сертификата"
      },
      {
        code: "subjectOrganization",
        text: "Организация"
      },
      {
        code: "subjectTitle",
        text: "Должность"
      },
      {
        code: "subjectEmail",
        text: "Электронный адрес"
      }
      /*{
        code: "subject",
        text: "Дополнительные данные сертификата"
      }*/
    ],
    otherType: [
      {
        code: "issuerName",
        text: "Выдан"
      },
      /*{
        code: "issuer",
        text: "Дополнительные данные сертификата издателя"
      },*/
      {
        code: "certNotBefore",
        after: "certNotAfter",
        text: "Действителен"
      },
      {
        code: "certSerial",
        text: "Серийный номер"
      },
      {
        code: "certThumbprint",
        text: "Отпечаток"
      }
    ]
  }
});

export const mutations = {
  changeResult(state, json) {
    state.result = json;
  },
  changeUploadStatus(state, status) {
    state.uploadStatus = status;
  }
};

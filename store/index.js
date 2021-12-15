export const state = () => ({
  counters: { ym: 81665320, ga: "G-YZNW04TXLN" },
  uploadStatus: "form", //form, confirmation, uploading, success, error
  uploadForm: {
    error: "",
    controller: null,
    controllerAborted: false,
    pdfFile: undefined
  },
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
        text: "Тип подписи"
      },
      {
        code: "signatureName",
        text: "Название подписи"
      },
      {
        code: "coverWholeDocument",
        text: "Относится ко всему документу",
        value: {
          true: "Да",
          false: "Нет"
        }
      },
      {
        code: "sigReason",
        text: "Основание подписи"
      },
      {
        code: "sigLocation",
        text: "Место подписи"
      },
      {
        code: "sigContact",
        text: "Контактные данные из подписи"
      },
      {
        code: "sigDate",
        text: "Дата подписи из PDF",
        muted: true,
        notice:
          "Время и дата указаны в соответствии с часами компьютера подписанта и не могут быть доверенными."
      },
      {
        code: "signingTime",
        text: "Дата подписи из самой подписи",
        muted: true,
        notice:
          "Время и дата указаны в соответствии с часами компьютера подписанта и не могут быть доверенными."
      },
      {
        code: "signingTimestamp",
        text: "Дата подписи из метки доверенного времени"
      }
    ],
    personType: [
      {
        code: "subjectName",
        text: "Владелец сертификата",
        thumbprint: "certThumbprint",
        cer: "certificate"
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
      },
      {
        code: "subject",
        text: "Дополнительные данные сертификата",
        dropdown: true
      },
      {
        code: "issuerName",
        text: "Издатель сертификата",
        thumbprint: "issuerThumbprint",
        cer: "issuerCertificate"
      },
      {
        code: "issuer",
        text: "Дополнительные данные сертификата издателя",
        dropdown: true
      },
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
      },
      {
        code: "timestampName",
        text: "Метка доверенного времени от"
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
  },
  setUploadFormProp(state, payload) {
    state.uploadForm[payload.prop] = payload.value;
  }
};

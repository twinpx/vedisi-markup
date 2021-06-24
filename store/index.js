export const state = () => ({
  counters: { ym: 81665320, ga: "G-YZNW04TXLN" },
  uploadStatus: "success", //form, confirmation, uploading, success, error
  result: {
    PDF: {
      filename:
        "\u0412\u044B\u043F\u0438\u0441\u043A\u0430-250-\u0424C_21 (1).pdf",
      MD5: "198f844206bf25f3ea044c6c76bc3b11"
    },
    SIG: {
      filename: null,
      MD5: null
    },
    signatures: [
      {
        valid: true,
        error: false,
        errorDescription: null,
        fromPDF: true,
        signatureName: "CPPDFDSig signature",
        coverWholeDocument: true,
        documentRevision: 1,
        sigReason:
          "\u041F\u043E\u0434\u043F\u0438\u0441\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",
        sigLocation: null,
        sigDate:
          "28 \u0430\u043F\u0440\u0435\u043B\u044F 2021 \u0433. 16:10:04",
        sigContact: null,
        type: "CAdES-BES",
        signingTime:
          "28 \u0430\u043F\u0440\u0435\u043B\u044F 2021 \u0433. 16:10:04",
        signingTimestamp: null,
        verifySignatureStatus: true,
        verifyChainStatus: true,
        certificate:
          "MIIJtTCCCWKgAwIBAgIRAVQs3QAlrKmTRxKMpVu9KrswCgYIKoUDBwEBAwIwggHWMRgwFgYFKoUDZAESDTEwOTc3NDYyOTM4ODYxGjAYBggqhQMDgQMBARIMMDA3NzI5NjMzMTMxMQswCQYDVQQGEwJSVTEbMBkGA1UECAwSNzcg0LMu0JzQvtGB0LrQstCwMRUwEwYDVQQHDAzQnNC\u002B0YHQutCy0LAxbTBrBgNVBAkMZNGD0LvQuNGG0LAg0JvQtdC90LjQvdGB0LrQuNC1INCT0L7RgNGLLCDQtNC\u002B0LwgMSwg0YHRgtGA0L7QtdC90LjQtSA3Nywg0LrQvtC80L3QsNGC0LAgMTksINGN0YLQsNC2IDMxMDAuBgNVBAsMJ9Cj0LTQvtGB0YLQvtCy0LXRgNGP0Y7RidC40Lkg0YbQtdC90YLRgDGBgDB\u002BBgNVBAoMd9Ce0LHRidC10YHRgtCy0L4g0YEg0L7Qs9GA0LDQvdC40YfQtdC90L3QvtC5INC\u002B0YLQstC10YLRgdGC0LLQtdC90L3QvtGB0YLRjNGOICLQrdC70LXQutGC0YDQvtC90L3Ri9C5INGN0LrRgdC/0YDQtdGB0YEiMTkwNwYDVQQDDDDQntCe0J4gItCt0LvQtdC60YLRgNC\u002B0L3QvdGL0Lkg0Y3QutGB0L/RgNC10YHRgSIwHhcNMjAwODI4MTMxNjAwWhcNMjEwODI4MTMyNjAwWjCCAakxSDBGBgNVBAkMP9C/0YDQvtGB0L/QtdC60YIg0JzQuNGH0YPRgNC40L3RgdC60LjQuSwg0LTQvtC8IDIxLCDQutC\u002B0YDQvy4gNDEVMBMGA1UEBAwM0J3QvtGB0L7QstCwMTAwLgYDVQQMDCfQk9C10L3QtdGA0LDQu9GM0L3Ri9C5INC00LjRgNC10LrRgtC\u002B0YAxFjAUBgNVBAMMDdCh0KDQniDQkNCQ0KExGjAYBggqhQMDgQMBARIMMDA3NzI5NDQwODEzMRYwFAYDVQQKDA3QodCg0J4g0JDQkNChMRgwFgYDVQQHDA/Qsy7QnNC\u002B0YHQutCy0LAxGDAWBgNVBAgMDzc3INCc0L7RgdC60LLQsDELMAkGA1UEBhMCUlUxJTAjBgkqhkiG9w0BCQEWFm5vc292YUBhdWRpdG9yLXNyby5vcmcxGDAWBgUqhQNkARINMTA5Nzc5OTAxMDg3MDEWMBQGBSqFA2QDEgswMDgyMjUzOTEyNTEuMCwGA1UEKgwl0J7Qu9GM0LPQsCDQkNC70LXQutGB0LDQvdC00YDQvtCy0L3QsDBmMB8GCCqFAwcBAQEBMBMGByqFAwICJAAGCCqFAwcBAQICA0MABED8TEF2ELIlz4poqnNoYB8jrl4RDlOfTouRQMMU8D3vYBNL8XFMGG3n64b0hkfm8iOg/dGIPDyHxRgSHrRDN3xfo4IFKzCCBScwDgYDVR0PAQH/BAQDAgTwMEQGA1UdJQQ9MDsGCCsGAQUFBwMEBggrBgEFBQcDAgYHKoUDAgIiBgYIKoUDBQEYAh4GCCqFAwOBAgQBBggqhQMDgQIDDDAdBgNVHQ4EFgQUIepVvfsQ/v/Aw\u002BI7unFfoUNA6kYwgYIGCCsGAQUFBwEBBHYwdDA0BggrBgEFBQcwAYYoaHR0cDovL29jc3AtdHNwLmdhcmFudC5ydS9vY3NwNy9vY3NwLnNyZjA8BggrBgEFBQcwAoYwaHR0cDovL2NhLmdhcmFudC5ydS9jYS9hY2NyZWRpdGVkL2dhcmFudF9hYzkuY2VyMBMGA1UdIAQMMAowCAYGKoUDZHEBMCsGA1UdEAQkMCKADzIwMjAwODI4MTMxNjAwWoEPMjAyMTA4MjgxMzE2MDBaMIIBMAYFKoUDZHAEggElMIIBIQwrItCa0YDQuNC/0YLQvtCf0YDQviBDU1AiICjQstC10YDRgdC40Y8gNC4wKQwsItCa0YDQuNC/0YLQvtCf0YDQviDQo9CmIiAo0LLQtdGA0YHQuNC4IDIuMCkMX9Ch0LXRgNGC0LjRhNC40LrQsNGCINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjRjyDQpNCh0JEg0KDQvtGB0YHQuNC4INCh0KQvMTI0LTMzODEg0L7RgiAxMS4wNS4yMDE4DGPQodC10YDRgtC40YTQuNC60LDRgiDRgdC\u002B0L7RgtCy0LXRgtGB0YLQstC40Y8g0KTQodCRINCg0L7RgdGB0LjQuCDihJYg0KHQpC8xMjgtMzU5MyDQvtGCIDE3LjEwLjIwMTgwNgYFKoUDZG8ELQwrItCa0YDQuNC/0YLQvtCf0YDQviBDU1AiICjQstC10YDRgdC40Y8gNS4wKTCBgwYDVR0fBHwwejA3oDWgM4YxaHR0cDovL2NhLmdhcmFudC5ydS9jZHAvYWNjcmVkaXRlZC9nYXJhbnRfYWM5LmNybDA/oD2gO4Y5aHR0cDovL3d3dy5nYXJhbnRleHByZXNzLnJ1L2NkcC9hY2NyZWRpdGVkL2dhcmFudF9hYzkuY3JsMIIBYAYDVR0jBIIBVzCCAVOAFOKJz2myxFAzTDEXK4Zhmg2tyYcnoYIBLKSCASgwggEkMR4wHAYJKoZIhvcNAQkBFg9kaXRAbWluc3Z5YXoucnUxCzAJBgNVBAYTAlJVMRgwFgYDVQQIDA83NyDQnNC\u002B0YHQutCy0LAxGTAXBgNVBAcMENCzLiDQnNC\u002B0YHQutCy0LAxLjAsBgNVBAkMJdGD0LvQuNGG0LAg0KLQstC10YDRgdC60LDRjywg0LTQvtC8IDcxLDAqBgNVBAoMI9Cc0LjQvdC60L7QvNGB0LLRj9C30Ywg0KDQvtGB0YHQuNC4MRgwFgYFKoUDZAESDTEwNDc3MDIwMjY3MDExGjAYBggqhQMDgQMBARIMMDA3NzEwNDc0Mzc1MSwwKgYDVQQDDCPQnNC40L3QutC\u002B0LzRgdCy0Y/Qt9GMINCg0L7RgdGB0LjQuIILAKmyUgAAAAAAAwcwgZIGByqFAwICMQIEgYYwgYMwcxYqaHR0cDovL3d3dy5nYXJhbnRleHByZXNzLnJ1L2NhcV91bmxpbWl0ZWQvDEHQkdC10Lcg0L7Qs9GA0LDQvdC40YfQtdC90LjRjyDQvtCx0LvQsNGB0YLQuCDQv9GA0LjQvNC10L3QtdC90LjRjwMCBeAEDBmZrp8IM/Oj8B94rDAKBggqhQMHAQEDAgNBAPNFSvuZmGhPswq/Y09KqWyJGvwr2Y3/jEJDixB1GAAy1ZWaJS95qUwp9p01LSpBpaGsqOf4kPPdxdsIFT2vYYA=",
        subject:
          "G=\u041E\u043B\u044C\u0433\u0430 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u043D\u0430, \u0421\u041D\u0418\u041B\u0421=00822539125, \u041E\u0413\u0420\u041D=1097799010870, E=nosova@auditor-sro.org, C=RU, S=77 \u041C\u043E\u0441\u043A\u0432\u0430, L=\u0433.\u041C\u043E\u0441\u043A\u0432\u0430, O=\u0421\u0420\u041E \u0410\u0410\u0421, \u0418\u041D\u041D=007729440813, CN=\u0421\u0420\u041E \u0410\u0410\u0421, T=\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440, SN=\u041D\u043E\u0441\u043E\u0432\u0430, STREET=\u0022\u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442 \u041C\u0438\u0447\u0443\u0440\u0438\u043D\u0441\u043A\u0438\u0439, \u0434\u043E\u043C 21, \u043A\u043E\u0440\u043F. 4\u0022",
        subjectName:
          "\u041D\u043E\u0441\u043E\u0432\u0430 \u041E\u043B\u044C\u0433\u0430 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u043D\u0430",
        subjectOrganization: "\u0421\u0420\u041E \u0410\u0410\u0421",
        subjectTitle:
          "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440",
        subjectEmail: "nosova@auditor-sro.org",
        certSerial: "01542CDD0025ACA99347128CA55BBD2ABB",
        certThumbprint: "A52D85C420CC9D96F39F4C575E116EF9EEDA9405",
        issuerThumbprint: "A52D85C420CC9D96F39F4C575E116EF9EEDA9405",
        certNotBefore:
          "28 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2020 \u0433.",
        certNotAfter:
          "28 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2021 \u0433.",
        issuerCertificate:
          "MIIIPDCCB\u002BmgAwIBAgILAKmyUgAAAAAAAwcwCgYIKoUDBwEBAwIwggEkMR4wHAYJKoZIhvcNAQkBFg9kaXRAbWluc3Z5YXoucnUxCzAJBgNVBAYTAlJVMRgwFgYDVQQIDA83NyDQnNC\u002B0YHQutCy0LAxGTAXBgNVBAcMENCzLiDQnNC\u002B0YHQutCy0LAxLjAsBgNVBAkMJdGD0LvQuNGG0LAg0KLQstC10YDRgdC60LDRjywg0LTQvtC8IDcxLDAqBgNVBAoMI9Cc0LjQvdC60L7QvNGB0LLRj9C30Ywg0KDQvtGB0YHQuNC4MRgwFgYFKoUDZAESDTEwNDc3MDIwMjY3MDExGjAYBggqhQMDgQMBARIMMDA3NzEwNDc0Mzc1MSwwKgYDVQQDDCPQnNC40L3QutC\u002B0LzRgdCy0Y/Qt9GMINCg0L7RgdGB0LjQuDAeFw0xOTEwMTExMjE3MTJaFw0zNDEwMTExMjE3MTJaMIIB1jEYMBYGBSqFA2QBEg0xMDk3NzQ2MjkzODg2MRowGAYIKoUDA4EDAQESDDAwNzcyOTYzMzEzMTELMAkGA1UEBhMCUlUxGzAZBgNVBAgMEjc3INCzLtCc0L7RgdC60LLQsDEVMBMGA1UEBwwM0JzQvtGB0LrQstCwMW0wawYDVQQJDGTRg9C70LjRhtCwINCb0LXQvdC40L3RgdC60LjQtSDQk9C\u002B0YDRiywg0LTQvtC8IDEsINGB0YLRgNC\u002B0LXQvdC40LUgNzcsINC60L7QvNC90LDRgtCwIDE5LCDRjdGC0LDQtiAzMTAwLgYDVQQLDCfQo9C00L7RgdGC0L7QstC10YDRj9GO0YnQuNC5INGG0LXQvdGC0YAxgYAwfgYDVQQKDHfQntCx0YnQtdGB0YLQstC\u002BINGBINC\u002B0LPRgNCw0L3QuNGH0LXQvdC90L7QuSDQvtGC0LLQtdGC0YHRgtCy0LXQvdC90L7RgdGC0YzRjiAi0K3Qu9C10LrRgtGA0L7QvdC90YvQuSDRjdC60YHQv9GA0LXRgdGBIjE5MDcGA1UEAwww0J7QntCeICLQrdC70LXQutGC0YDQvtC90L3Ri9C5INGN0LrRgdC/0YDQtdGB0YEiMGYwHwYIKoUDBwEBAQEwEwYHKoUDAgIjAQYIKoUDBwEBAgIDQwAEQAGubB0gGgxV98lx9w523bsIaPhcHBNmhv9mSQBgjQMcZjxUEWFWWvb0oY1/UcaVBYaxGSsG8jTRu4TWLoIIu2qjggQ9MIIEOTALBgNVHQ8EBAMCAYYwHQYDVR0OBBYEFOKJz2myxFAzTDEXK4Zhmg2tyYcnMBIGA1UdEwEB/wQIMAYBAf8CAQAwLwYDVR0gBCgwJjAIBgYqhQNkcQEwCAYGKoUDZHECMAgGBiqFA2RxAzAGBgRVHSAAMFsGBSqFA2RvBFIMUNCh0JrQl9CYICLQmtGA0LjQv9GC0L7Qn9GA0L4gQ1NQIiDQstC10YDRgdC40LggNC4wICjQuNGB0L/QvtC70L3QtdC90LjQtSAzLUJhc2UpMBQGCSsGAQQBgjcUAgQHDAVTdWJDQTASBgkrBgEEAYI3FQEEBQIDAQABMIIBZQYDVR0jBIIBXDCCAViAFMJU8bRr1Ey34G02tCOQ8f7DPJsGoYIBLKSCASgwggEkMR4wHAYJKoZIhvcNAQkBFg9kaXRAbWluc3Z5YXoucnUxCzAJBgNVBAYTAlJVMRgwFgYDVQQIDA83NyDQnNC\u002B0YHQutCy0LAxGTAXBgNVBAcMENCzLiDQnNC\u002B0YHQutCy0LAxLjAsBgNVBAkMJdGD0LvQuNGG0LAg0KLQstC10YDRgdC60LDRjywg0LTQvtC8IDcxLDAqBgNVBAoMI9Cc0LjQvdC60L7QvNGB0LLRj9C30Ywg0KDQvtGB0YHQuNC4MRgwFgYFKoUDZAESDTEwNDc3MDIwMjY3MDExGjAYBggqhQMDgQMBARIMMDA3NzEwNDc0Mzc1MSwwKgYDVQQDDCPQnNC40L3QutC\u002B0LzRgdCy0Y/Qt9GMINCg0L7RgdGB0LjQuIIQTm1HiybyfWV/do4CXOPTkzCBmAYDVR0fBIGQMIGNMC2gK6AphidodHRwOi8vcmVlc3RyLXBraS5ydS9jZHAvZ3VjX2dvc3QxMi5jcmwwLaAroCmGJ2h0dHA6Ly9jb21wYW55LnJ0LnJ1L2NkcC9ndWNfZ29zdDEyLmNybDAtoCugKYYnaHR0cDovL3Jvc3RlbGVjb20ucnUvY2RwL2d1Y19nb3N0MTIuY3JsMEMGCCsGAQUFBwEBBDcwNTAzBggrBgEFBQcwAoYnaHR0cDovL3JlZXN0ci1wa2kucnUvY2RwL2d1Y19nb3N0MTIuY3J0MIH1BgUqhQNkcASB6zCB6Aw00J/QkNCa0JwgwqvQmtGA0LjQv9GC0L7Qn9GA0L4gSFNNwrsg0LLQtdGA0YHQuNC4IDIuMAxD0J/QkNCaIMKr0JPQvtC70L7QstC90L7QuSDRg9C00L7RgdGC0L7QstC10YDRj9GO0YnQuNC5INGG0LXQvdGC0YDCuww10JfQsNC60LvRjtGH0LXQvdC40LUg4oSWIDE0OS8zLzIvMi8yMyDQvtGCIDAyLjAzLjIwMTgMNNCX0LDQutC70Y7Rh9C10L3QuNC1IOKEliAxNDkvNy82LzEwNSDQvtGCIDI3LjA2LjIwMTgwCgYIKoUDBwEBAwIDQQAPiJK\u002BjDoI0Ecl\u002BwxlfmzNpgsq/AGXmoPVnA8z6Xg5q8w1H\u002BjMvMk0AorN89mUpQa80phiXp8c165kHZERbMDy",
        issuer:
          "CN=\u0022\u041E\u041E\u041E \u0022\u0022\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u044D\u043A\u0441\u043F\u0440\u0435\u0441\u0441\u0022\u0022\u0022, O=\u0022\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u0441 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E\u0439 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C\u044E \u0022\u0022\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u044D\u043A\u0441\u043F\u0440\u0435\u0441\u0441\u0022\u0022\u0022, OU=\u0423\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u044F\u044E\u0449\u0438\u0439 \u0446\u0435\u043D\u0442\u0440, STREET=\u0022\u0443\u043B\u0438\u0446\u0430 \u041B\u0435\u043D\u0438\u043D\u0441\u043A\u0438\u0435 \u0413\u043E\u0440\u044B, \u0434\u043E\u043C 1, \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435 77, \u043A\u043E\u043C\u043D\u0430\u0442\u0430 19, \u044D\u0442\u0430\u0436 3\u0022, L=\u041C\u043E\u0441\u043A\u0432\u0430, S=77 \u0433.\u041C\u043E\u0441\u043A\u0432\u0430, C=RU, \u0418\u041D\u041D=007729633131, \u041E\u0413\u0420\u041D=1097746293886",
        issuerName:
          "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u0441 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E\u0439 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C\u044E \u0022\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u044D\u043A\u0441\u043F\u0440\u0435\u0441\u0441\u0022",
        issuerAccreditation: true,
        qualifiedSignature: true,
        timestampIssuerCertificate: null,
        timestampCertificate: null,
        timestampName: null,
        timeStampIssuerAccreditation: null
      }
    ],
    validationDate: "18 \u0438\u044E\u043D\u044F 2021 \u0433. 14:48:59"
  },
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
        text: "Контактные данные из подписи:"
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
  }
};

// Configuração da aplicação.
// TODO (João, há 14 meses): mover estes valores para variáveis de ambiente
// antes de passar a produção.

const config = {
  porta: process.env.PORT || 3000,
  ambiente: process.env.NODE_ENV || "development",

  jwtSecret: "REMOVIDO_JWT_SECRET",
  apiKeyPagamentos: "REMOVIDO_API_KEY_PAGAMENTOS",
};

module.exports = config;

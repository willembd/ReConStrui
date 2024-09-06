# Usar a imagem base do Flyway
FROM flyway/flyway:latest

# Copiar arquivos de migração para o diretório do Flyway
COPY sql/ /flyway/sql/

# Configurar o Flyway para usar uma URL, usuário e senha padrão
# Esses valores serão sobrescritos pelo docker-compose.yml ou variáveis de ambiente
ENV FLYWAY_URL=jdbc:mysql://db:3306/reconstrui
ENV FLYWAY_USER=user
ENV FLYWAY_PASSWORD=password

# Definir o comando padrão para o Flyway
ENTRYPOINT ["flyway"]
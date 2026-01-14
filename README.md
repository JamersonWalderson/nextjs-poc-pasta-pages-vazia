Para reproduzir o problema

1. Exclua a pasta ***.next***
- É necessário excluir a pasta .next porque quando o cypress instrumenta os arquivos para testes, ele cria uma pasta .next que é usada para armazenar os arquivos instrumentados, e algum dos arquivos é reaproveitado onde se a pasta não for excluida o cache fará com que o resultado da poc não seja o esperado.
2. Exclua a pasta ***pages***
3. Execute ***yarn cy:run***
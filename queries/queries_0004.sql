{
  post342: post(id: "342") {
    title
    createdAt
    unixTimestamp
  }
  post860: post(id:"860") {
    title
    createdAt
    unixTimestamp
  }
}

## Renomeando inclusive os fields
{
  post342: post(id: "342") {
    titulo: title
    data_criacao: createdAt
    unixTimestamp
  }
  post860: post(id:"860") {
    title
    createdAt
    unixTimestamp
  }
}

# Cria o fragmento post no tipo Post
fragment post on Post {
  title
  createdAt
  unixTimestamp
}
{
  post342: post(id: "342") {
		...post
  }
  post860: post(id: "860") {
    ...post
  }
}

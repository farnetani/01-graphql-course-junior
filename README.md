# Consultas

```
# Consulta User
{
  user {
    id
    userName
  }
}


# Consulta Users
{
  users {
    id
    userName
  }
}

# Result
{
  "data": {
    "users": [
      {
        "id": "1",
        "userName": "Junior"
      },
      {
        "id": "2",
        "userName": "Virginia"
      },
      {
        "id": "3",
        "userName": "Lucca"
      }
    ]
  }
}
```

## Rota do json-server

```
### Carrega os posts
http://localhost:3000/posts?_sort=indexRef&_order=asc&_start=0&_limit=2

### Carrega os posts com users (expand)
http://localhost:3000/posts?_sort=indexRef&_order=asc&_start=0&_expand=user

### Carrega com os posts (embed)
http://localhost:3000/users?_sort=indexRef&_order=asc&_start=1&_limit=2?&_embed=posts
```

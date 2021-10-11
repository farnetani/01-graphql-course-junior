{
  posts(input: {
    _sort: "indexRef"
    _order:"desc"
    _start: 0
    _limit: 2
  }) {
    indexRef
    title
    createdAt
    unixTimestamp
  }
}


{
  users(input: {
    _sort: "indexRef"
    _order:"desc"
    _start: 0
    _limit: 2
  }) {
    indexRef
    id
    firstName
    lastName
    userName
    createdAt
  }
}

## GET_USERS
query GET_USERS(
  $sort: String = "indexRef"
  $order: String = "desc"
  $start: Int = 0
  $limit: Int = 5
) {
  users(
    input: { _sort: $sort, _order: $order, _start: $start, _limit: $limit }
  ) {
    indexRef
    id
    firstName
    lastName
    userName
    createdAt
  }
}

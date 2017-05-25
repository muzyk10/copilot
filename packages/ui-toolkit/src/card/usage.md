```
const {
  CardDescription,
  CardHeader,
  CardMeta,
  CardOptions,
  CardOutlet,
  CardSubTitle,
  CardTitle,
  CardView,
  CardGroupView
} = require('./');

<Card>
  <CardView>
    <CardMeta>
      <CardTitle>Title</CardTitle>
      <CardSubTitle>Subtitle</CardSubTitle>
      <CardDescription>Description</CardDescription>
    </CardMeta>
    <CardOutlet>Outlet</CardOutlet>
  </CardView>
  <CardOptions />
</Card>
```

#### `collapsed`

```
const {
  CardDescription,
  CardHeader,
  CardMeta,
  CardOptions,
  CardOutlet,
  CardSubTitle,
  CardTitle,
  CardView,
  CardGroupView
} = require('./');

<Card collapsed>
  <CardView>
    <CardMeta>
      <CardTitle>Title</CardTitle>
      <CardSubTitle>Subtitle</CardSubTitle>
      <CardDescription>Description</CardDescription>
    </CardMeta>
    <CardOutlet>Outlet</CardOutlet>
  </CardView>
  <CardOptions />
</Card>
```

#### `headed`

```
const {
  CardDescription,
  CardHeader,
  CardMeta,
  CardOptions,
  CardOutlet,
  CardSubTitle,
  CardTitle,
  CardView,
  CardGroupView
} = require('./');

<Card headed>
  <CardHeader>
    <CardMeta>
      <CardTitle>Title</CardTitle>
      <CardSubTitle>Subtitle</CardSubTitle>
      <CardDescription>Description</CardDescription>
    </CardMeta>
    <CardOptions />
  </CardHeader>
  <CardView>
    <CardMeta>
      <CardDescription>Description</CardDescription>
    </CardMeta>
    <CardOutlet>Outlet</CardOutlet>
  </CardView>
</Card>
```

#### `headed` and `collapsed`

```
const {
  CardDescription,
  CardHeader,
  CardMeta,
  CardOptions,
  CardOutlet,
  CardSubTitle,
  CardTitle,
  CardView,
  CardGroupView
} = require('./');

<Card collapsed headed>
  <CardHeader>
    <CardMeta>
      <CardTitle>Title</CardTitle>
      <CardSubTitle>Subtitle</CardSubTitle>
      <CardDescription>Description</CardDescription>
    </CardMeta>
    <CardOptions />
  </CardHeader>
  <CardView>
    <CardMeta>
      <CardDescription>Description</CardDescription>
    </CardMeta>
    <CardOutlet>Outlet</CardOutlet>
  </CardView>
</Card>
```

#### `stacked`

```
const {
  CardDescription,
  CardHeader,
  CardMeta,
  CardOptions,
  CardOutlet,
  CardSubTitle,
  CardTitle,
  CardView,
  CardGroupView
} = require('./');

<Card stacked>
  <CardView>
    <CardMeta>
      <CardTitle>Title</CardTitle>
      <CardSubTitle>Subtitle</CardSubTitle>
      <CardDescription>Description</CardDescription>
    </CardMeta>
    <CardOutlet>Outlet</CardOutlet>
  </CardView>
  <CardOptions />
</Card>
```

#### group

```
const {
  CardDescription,
  CardHeader,
  CardMeta,
  CardOptions,
  CardOutlet,
  CardSubTitle,
  CardTitle,
  CardView,
  CardGroupView
} = require('./');

<Card headed>
  <CardHeader>
    <CardMeta>
      <CardTitle>Title</CardTitle>
      <CardSubTitle>Subtitle</CardSubTitle>
      <CardDescription>Description</CardDescription>
    </CardMeta>
    <CardOptions />
  </CardHeader>
  <CardGroupView>
    <Card flat>
      <CardView>
        <CardMeta>
          <CardTitle>Title</CardTitle>
        </CardMeta>
        <CardOutlet>Outlet</CardOutlet>
      </CardView>
    </Card>
    <Card flat>
      <CardView>
        <CardMeta>
          <CardTitle>Title</CardTitle>
          <CardSubTitle>Subtitle</CardSubTitle>
          <CardDescription>Description</CardDescription>
        </CardMeta>
        <CardOutlet>Outlet</CardOutlet>
      </CardView>
    </Card>
    <Card flat stacked>
      <CardView>
        <CardMeta>
          <CardTitle>Title</CardTitle>
          <CardSubTitle>Subtitle</CardSubTitle>
        </CardMeta>
        <CardOutlet>Outlet</CardOutlet>
      </CardView>
    </Card>
  </CardGroupView>
</Card>
```
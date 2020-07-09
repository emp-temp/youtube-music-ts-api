
<a name="_interfaces_primary_iyoutubemusicmd"></a>


# Interface: IYouTubeMusic

Defines the main YouTube Music API object. Using this object, you can either choose to make calls as a guest or an
authenticated user. Not all APIs are available as a guest, so it is preferred to authenticate the user if possible.

## Hierarchy

* **IYouTubeMusic**

## Index

### Methods

* [authenticate](#authenticate)
* [guest](#guest)

## Methods

###  authenticate

▸ **authenticate**(`cookiesStr`: string): *Promise‹[IYouTubeMusicAuthenticated](#_interfaces_primary_iyoutubemusicauthenticatedmd)›*

Defined in interfaces-primary.ts:16

Authenticates the user with the YouTube Music API. This function overload requies the cookie string of a valid logged in user.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cookiesStr` | string | The cookie string of a valid logged in user. The minimum required cookie values needed are the HSID, SSID, APISID, SAPISID, and __Secure-3PSID. To obtain this cookie value, log into https://music.youtube.com as a user and use your browser's developer tools to obtain the "cookie" value sent as a request header. Extra values in the cookie will be ignored. |

**Returns:** *Promise‹[IYouTubeMusicAuthenticated](#_interfaces_primary_iyoutubemusicauthenticatedmd)›*

A promise that will yield authenticated access to the YouTube Music API.

___

###  guest

▸ **guest**(): *Promise‹[IYouTubeMusicGuest](#_interfaces_primary_iyoutubemusicguestmd)›*

Defined in interfaces-primary.ts:23

Provides guest access to the YouTube Music API. Only non-restrictive APIs (such as public playlists) are available to guests.

**Returns:** *Promise‹[IYouTubeMusicGuest](#_interfaces_primary_iyoutubemusicguestmd)›*

A promise that will yield guest access to the YouTube Music API.


<a name="_interfaces_primary_iyoutubemusicauthenticatedmd"></a>


# Interface: IYouTubeMusicAuthenticated

Defines the YouTube Music APIs available to an authenticated user. An authenticated user also naturally includes the APIs available to a guest.

## Hierarchy

* [IYouTubeMusicGuest](#_interfaces_primary_iyoutubemusicguestmd)

  ↳ **IYouTubeMusicAuthenticated**

## Index

### Methods

* [getLibraryPlaylists](#getlibraryplaylists)
* [getPlaylist](#getplaylist)

## Methods

###  getLibraryPlaylists

▸ **getLibraryPlaylists**(): *Promise‹[IPlaylistSummary](#_interfaces_supplementary_iplaylistsummarymd)[]›*

Defined in interfaces-primary.ts:35

Gets all the playlists in the user's library.

**Returns:** *Promise‹[IPlaylistSummary](#_interfaces_supplementary_iplaylistsummarymd)[]›*

A promise that will yield an array of all the playlists in the user's library.

___

###  getPlaylist

▸ **getPlaylist**(`id`: string): *Promise‹[IPlaylistDetail](#_interfaces_supplementary_iplaylistdetailmd)›*

Defined in interfaces-primary.ts:43

Gets detailed information for a specific playlist.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The ID of the playlist to get the detailed information for. |

**Returns:** *Promise‹[IPlaylistDetail](#_interfaces_supplementary_iplaylistdetailmd)›*

A promise that will yield the detailed information for a specific playlist.


<a name="_interfaces_primary_iyoutubemusicguestmd"></a>


# Interface: IYouTubeMusicGuest

Defines the YouTube Music APIs available to a guest.

## Hierarchy

* **IYouTubeMusicGuest**

  ↳ [IYouTubeMusicAuthenticated](#_interfaces_primary_iyoutubemusicauthenticatedmd)


<a name="_interfaces_supplementary_ialbumsummarymd"></a>


# Interface: IAlbumSummary

Defines an album summary.

## Hierarchy

* **IAlbumSummary**

## Index

### Properties

* [id](#optional-id)
* [name](#optional-name)

## Properties

### `Optional` id

• **id**? : *string*

Defined in interfaces-supplementary.ts:8

The ID of the album.

___

### `Optional` name

• **name**? : *string*

Defined in interfaces-supplementary.ts:13

The name of the album.


<a name="_interfaces_supplementary_iartistsummarymd"></a>


# Interface: IArtistSummary

Defines an artist summary.

## Hierarchy

* **IArtistSummary**

## Index

### Properties

* [id](#optional-id)
* [name](#optional-name)

## Properties

### `Optional` id

• **id**? : *string*

Defined in interfaces-supplementary.ts:23

The ID of the artist.

___

### `Optional` name

• **name**? : *string*

Defined in interfaces-supplementary.ts:28

The name of the artist.


<a name="_interfaces_supplementary_iplaylistdetailmd"></a>


# Interface: IPlaylistDetail

Defines the details for a playlist.

## Hierarchy

* **IPlaylistDetail**

## Index

### Properties

* [count](#optional-count)
* [description](#optional-description)
* [id](#optional-id)
* [name](#optional-name)
* [privacy](#optional-privacy)
* [tracks](#optional-tracks)

## Properties

### `Optional` count

• **count**? : *number*

Defined in interfaces-supplementary.ts:53

The count of tracks within the playlist.

___

### `Optional` description

• **description**? : *string*

Defined in interfaces-supplementary.ts:48

The description of the playlist.

___

### `Optional` id

• **id**? : *string*

Defined in interfaces-supplementary.ts:38

The ID of the playlist.

___

### `Optional` name

• **name**? : *string*

Defined in interfaces-supplementary.ts:43

The name of the playlist.

___

### `Optional` privacy

• **privacy**? : *string*

Defined in interfaces-supplementary.ts:58

The privacy level of the playlist.

___

### `Optional` tracks

• **tracks**? : *[ITrackDetail](#_interfaces_supplementary_itrackdetailmd)[]*

Defined in interfaces-supplementary.ts:63

The array of tracks within the playlist.


<a name="_interfaces_supplementary_iplaylistsummarymd"></a>


# Interface: IPlaylistSummary

Defines a playlist summary.

## Hierarchy

* **IPlaylistSummary**

## Index

### Properties

* [count](#optional-count)
* [id](#optional-id)
* [name](#optional-name)

## Properties

### `Optional` count

• **count**? : *number*

Defined in interfaces-supplementary.ts:83

The count of tracks within the playlist.

___

### `Optional` id

• **id**? : *string*

Defined in interfaces-supplementary.ts:73

The ID of the playlist.

___

### `Optional` name

• **name**? : *string*

Defined in interfaces-supplementary.ts:78

The name of the playlist.


<a name="_interfaces_supplementary_itrackdetailmd"></a>


# Interface: ITrackDetail

Defines the details for a track.

## Hierarchy

* **ITrackDetail**

## Index

### Properties

* [album](#optional-album)
* [artists](#optional-artists)
* [duration](#optional-duration)
* [id](#optional-id)
* [title](#optional-title)

## Properties

### `Optional` album

• **album**? : *[IAlbumSummary](#_interfaces_supplementary_ialbumsummarymd)*

Defined in interfaces-supplementary.ts:108

The album the track is from.

___

### `Optional` artists

• **artists**? : *[IArtistSummary](#_interfaces_supplementary_iartistsummarymd)[]*

Defined in interfaces-supplementary.ts:103

The artist(s) that compose the track.

___

### `Optional` duration

• **duration**? : *string*

Defined in interfaces-supplementary.ts:113

The duration of the track as a readable string.

___

### `Optional` id

• **id**? : *string*

Defined in interfaces-supplementary.ts:93

The ID of the track.

___

### `Optional` title

• **title**? : *string*

Defined in interfaces-supplementary.ts:98

The title of the track.
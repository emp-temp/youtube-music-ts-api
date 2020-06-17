// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../http
//   ../https

declare module 'youtube-music-ts-api' {
    export { default } from "youtube-music-ts-api/service/youtube-music";
    export * from "youtube-music-ts-api/interfaces";
}

declare module 'youtube-music-ts-api/service/youtube-music' {
    import YouTubeMusicGuest from "youtube-music-ts-api/service/youtube-music-guest";
    import YouTubeMusicAuthenticated from "youtube-music-ts-api/service/youtube-music-authenticated";
    export default class YouTubeMusic {
        static guest(): Promise<YouTubeMusicGuest>;
        static authenticate(cookiesStr: string): Promise<YouTubeMusicAuthenticated>;
    }
}

declare module 'youtube-music-ts-api/interfaces' {
    import * as http from "http";
    export interface IIncomingMessage extends http.IncomingMessage {
        body?: string;
    }
    export interface IAlbumSummary {
        id?: string;
        name?: string;
    }
    export interface IArtistSummary {
        id?: string;
        name?: string;
    }
    export interface IPlaylistDetail {
        id?: string;
        name?: string;
        description?: string;
        count?: number;
        tracks?: ITrackDetail[];
    }
    export interface IPlaylistSummary {
        id?: string;
        name?: string;
        count?: number;
    }
    export interface ITrackDetail {
        id?: string;
        title?: string;
        artists?: IArtistSummary[];
        album?: IAlbumSummary;
        duration?: string;
    }
}

declare module 'youtube-music-ts-api/service/youtube-music-guest' {
    import * as http from "http";
    import * as https from "https";
    import { IIncomingMessage } from "youtube-music-ts-api/interfaces";
    export default class YouTubeMusicGuest {
        hostname: string;
        basePath: string;
        queryString: string;
        origin: string;
        generateHeaders(): http.OutgoingHttpHeaders;
        traverse(obj: any, ...path: string[]): any;
        sendRequest(path: string, data?: any): Promise<any>;
        sendHttpsRequest(request: https.RequestOptions, data?: string): Promise<IIncomingMessage>;
    }
}

declare module 'youtube-music-ts-api/service/youtube-music-authenticated' {
    import * as http from "http";
    import YouTubeMusicGuest from "youtube-music-ts-api/service/youtube-music-guest";
    import { IPlaylistDetail, IPlaylistSummary } from "youtube-music-ts-api/interfaces";
    export default class YouTubeMusicAuthenticated extends YouTubeMusicGuest {
        constructor(hsid: string, ssid: string, apisid: string, sapisid: string, secure3psid: string);
        generateHeaders(): http.OutgoingHttpHeaders;
        getLibraryPlaylists(): Promise<IPlaylistSummary[]>;
        getPlaylist(id: string): Promise<IPlaylistDetail>;
    }
}


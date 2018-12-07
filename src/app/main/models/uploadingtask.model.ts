import { Observable } from "rxjs";

export interface UploadingTask {
    fileName: string;
    percentage?: Observable<number>;
    url?: string;
}
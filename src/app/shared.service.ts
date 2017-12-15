import { Injectable } from '@angular/core';
import { Question } from './home/home.question';

@Injectable()
export class SharedService {
    static json:string="{\
        \"questions\": [\{\
            \"question\": \{\
                \"question\": \"Jesteś najlepszy?\",\
                \"answers\": [\{\
                    \"answer\": \"Tak\",\
                    \"value\": \"true\"\
                \}, \{\
                    \"answer\": \"Nie\",\
                    \"value\": \"false\"\
                \}]\
            \}\
        \}]\
    \}";
}
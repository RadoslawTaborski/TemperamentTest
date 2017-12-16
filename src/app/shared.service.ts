import { Injectable } from '@angular/core';
import { Question } from './home/home.question';

@Injectable()
export class SharedService {
    static json:string="{\
        \"questions\": [\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"żywy\",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"przedsiębiorczy\",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"analityczny\",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"elastyczny\",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"wesoły\",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"przekonywujący\",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"wytrwały\",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"spokojny\",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"towarzyski\",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"o silnej woli\",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"poświęcający się\",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"ugodowy\",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"urzekający\",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"rywalizujący\",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"delikatny\",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"opanowany\",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \} ,\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"pokrzepiający \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"zaradny \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"pełen szacunku \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"powściągliwy \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"pełen werwy \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"samodzielny \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"wrażliwy \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"niewymagający \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"promotor \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"nastawiony na sukces \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"planujący \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"cierpliwy \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"spontaniczny \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"pewny \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"zorganizowany \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"nieśmiały \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"optymista \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"szczery \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"uporządkowany \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"uprzejmy \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"dowcipny \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"autorytatywny \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"wierny \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"życzliwy \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"czarujący \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"odważny \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"drobiazgowy \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"dyplomatyczny \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"pogodny \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"pewny siebie \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"kulturalny \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"stały \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"inspirator \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"niezależny \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"idealista \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"nieszkodliwy \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"wylewny \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"stanowczy \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"głęboki \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"cięty \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"towarzyski \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"działacz \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"meloman \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"rozjemca \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"rozmowny \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"nieustępliwy \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"grzeczny \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"tolerancyjny \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"energiczny \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"przywódca \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"lojalny \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"słuchacz \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"ujmujący \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"szef \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"organizator \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"zadowolony \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"popularny \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"pracowity \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"perfekcjonista \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"sympatyczny \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"żywiołowy \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"śmiały \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"taktowny \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"zrónoważony \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"buńczuczny \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"apodyktyczny \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"wstydliwy \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"chłodny \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"niezdyscyplinowany \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"beznamiętny \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"pamiętliwy \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"apatyczny \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"powtarzającysię \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"oporny \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"obraźliwy \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"niezaangażowany \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"zapominalski \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"zuchwały \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"kapryśny \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"lękliwy \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"wtrącający  się \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"niecierpliwy \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"niepewny \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"niezdecydowany \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"niestały \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"skryty \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"niepopularny \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"odludek \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"chaotyczny \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"twardogłowy \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"wybredny \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"ociągający się \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"na wszystko pozwala \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"megaloman \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"pesymista \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"bezbarwny \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"złośnik \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"dyskutant \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"wyobcowany \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"nie mający celu \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"naiwny \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"denerwujący \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"nastawiony negatywnie \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"nonszalancki \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"lizus \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"pracoholik \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"izolujący się \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"zatroskany \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"gadatliwy \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"nietaktowny \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"przewrażliwiony \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"bojaźliwy \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"niezorganizowany \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"dominujący \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"przygnębiony \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"sceptyk \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"niestały \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"nietolerancyjny \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"zamknięty w sobie \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"obojętny \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"bałaganiarz \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"manipulant \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"nastrojowy \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"mamrot \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"próżny \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"uparty \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"nieufny \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"powolny \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"donośny \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"pyszałek \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"samotnik \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"leniwy \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"roztargniony \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"zapalczywy \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"podejrzliwy \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"niemrawy \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"niespokojny \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"pochopny \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"mściwy \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"dystansujący się \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \},\{\
            \"question\": \{\
                \"question\": \"Które określenie najbardziej do Ciebie pasuje?\",\
                \"answers\": [\{\
                    \"answer\": \"zmienny \",\
                    \"value\": \"sangwinik\"\
                \}, \{\
                    \"answer\": \"przebiegły \",\
                    \"value\": \"choleryk\"\
                \}, \{\
                    \"answer\": \"krytykant \",\
                    \"value\": \"melancholik\"\
                \}, \{\
                    \"answer\": \"ugodowiec \",\
                    \"value\": \"flegmatyk\"\
                \}]\
            \}\
        \}]\
    \}";


    static shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}
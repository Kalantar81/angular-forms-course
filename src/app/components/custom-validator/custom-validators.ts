import { FormControl } from '@angular/forms';
import { getMaxListeners } from 'process';
import { Observable } from 'rxjs';
export class CustomValidators {

    static restrictedEmails(control: FormControl): {[key: string]: boolean} {

        const forbiddenMails = ['abc@gmail.com', 'yyy@gmail.com'];

        if (forbiddenMails.includes(control.value)) {
            return {restrictedEmail: true};
        }

        /** возвращение null, означает, что валидатор пропускает данные,
         * т.е. ошибок нет
         */
        return null;
    }

    /** async validator */
    static uniqEmail(control: FormControl): Promise<any> | Observable<any> {

        return new Promise(resolve => {
            setTimeout(() => {
                if (control.value === 'async@gmail.com') {
                    resolve({uniqEmail: true});
                } else {
                    resolve(null);
                }
            }, 3000);
        });
    }
}

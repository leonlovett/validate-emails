validateEmail(email) {
        let result;
        if (emails && emails.includes(',')) {
            const arr = emails.split(',');
            arr.forEach(x => {
                let re = /\S+@\S+\.\S+/;
                re.test(x) ? result = true : result = false;
            });
            return result;
        } else {
            let re = /\S+@\S+\.\S+/;
            re.test(emails) ? result = true : result = false;
            return result;
        }
    }

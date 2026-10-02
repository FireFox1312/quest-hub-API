export const Log = {

    info: (message, meta = {}) => {

        const payload = {

            timestamp: new Date().toISOString(),
            level: 'info',
            message: message,
            ...meta

        }

        console.log(JSON.stringify(payload));

    },

    warn: (message, meta = {}) => {

        const payload = {

            timestamp: new Date().toISOString(),
            level: 'warn',
            message: message,
            ...meta

        }

        console.log(JSON.stringify(payload));

    },

    error: (message, meta = {}) => {

        const payload = {

            timestamp: new Date().toISOString(),
            level: 'error',
            message: message,
            ...meta

        }

        console.log(JSON.stringify(payload));

    }

}
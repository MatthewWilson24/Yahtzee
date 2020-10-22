const apiUrl = `http://${window.location.hostname}:${window.location.port}/api`

class ApiMessageSender {
    async get(path) {
        const content = {
            method: 'GET'
        }
        return this.send(path, content)
    }

    async post(path, req) {
        const content = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req)
        }
        return this.send(path, content)
    }

    async send(path, content) {
        let res = await fetch(`${apiUrl}${path}`, content)
        return res.json()
    }
}

export const apiMessageSender = new ApiMessageSender()
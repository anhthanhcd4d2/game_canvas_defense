class Enemy {
    constructor(position, width, height, radius, color, health, speed, money) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.color = color;
        this.health = health;
        this.takeDamage = 0
        this.speed = speed;
        this.money = money
        this.on= true
        this.velocity = {
            x: 0,
            y: 0
        };
        this.center = {
            x: 0,
            y: 0
        }
        this.index = 0
    }


    draw() {
        //-(100/(this.health / this.dameBasic))/100
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x - this.width / 2, this.position.y - this.radius - 10, this.width, this.height)
        ctx.beginPath()

        ctx.fillStyle = 'Lime'
        ctx.fillRect(this.position.x - this.width / 2, this.position.y - this.radius - 10, this.width - this.takeDamage, this.height)
        ctx.fill()
    }

    update() {
        this.draw()
        const waypoint = waypoints_Enemi[this.index]
        const xDistance = waypoint.x - this.position.x
        const yDistance = waypoint.y - this.position.y
        const angle = Math.atan2(yDistance, xDistance)
        const xCos = Math.cos(angle)
        const ySin = Math.sin(angle)
        this.velocity.x = xCos * this.speed
        this.velocity.y = ySin * this.speed
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }

        if (
            Math.abs(Math.round(this.position.x) - Math.round(waypoint.x)) < Math.abs(this.velocity.x) &&
            Math.abs(Math.round(this.position.y) - Math.round(waypoint.y)) < Math.abs(this.velocity.y) &&
            this.index < waypoints_Enemi.length - 1
        ) {
            this.index++
        }
    }
}

class PlacementTile {
    constructor(position, color) {
        this.position = position
        this.color = color
        this.size = 64
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size)
    }

    update() {
        this.draw()
    }

}


class Building {
    constructor(position, width, height, radius, color, basixDame, money) {
        this.position = position
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.color = color;
        this.check = false;
        this.basixDame = basixDame
        this.target = null;
        this.frames = 0
        this.money = money
        this.center = {
            x: 0,
            y: 0
        }
        this.projectiles = []
    }

    darw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        // xây phạm vi công kick của tòa nhà
        ctx.fillStyle = 'rgba(0,0,0,0.05)'
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
    }

    update() {
        this.darw()
        this.center.x = this.position.x + this.width / 2
        this.center.y = this.position.y + this.height / 2
        if (this.frames % 50 === 0 && this.target) {
            this.projectiles.push(
                new Projectile(
                    {x: this.center.x, y: this.center.y},
                    this.target, 'black', 15, 2, this.basixDame)
            )
        }
        this.frames++


    }
}

class Projectile {
    constructor(position, enemy, color, radius, speed, initDame) {
        this.position = position;
        this.enemy = enemy;
        this.color = color;
        this.radius = radius;
        this.speed = speed;
        this.initDame = initDame
        this.velocity = {
            x: 0,
            y: 0
        };
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
    }

    update() {
        this.speed += 0.01
        this.draw()
        const xDistance = this.enemy.position.x - this.position.x
        const yDistance = this.enemy.position.y - this.position.y
        const angle = Math.atan2(yDistance, xDistance)
        const xCos = Math.cos(angle) * this.speed
        const ySin = Math.sin(angle) * this.speed
        this.velocity.x = xCos * this.speed
        this.velocity.y = ySin * this.speed
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}







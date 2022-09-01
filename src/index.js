const canvas = document.querySelector('#canvas')
console.log(canvas)
canvas.width = 1920
canvas.height = 1024
const gameOver = document.querySelector('#overGame')
const heartCount = document.querySelector('#heart')
const moneyCount = document.querySelector('#money')
const ctx = canvas.getContext('2d')
const image = new Image()
let heart = 10
let initMoney = 200

let hahahihi = 1000
const listHome = [
    {
        name: 'option3',
        basixDame: 200,
        money: 5,
        radius: 250
    },
    {
        name: 'option2',
        basixDame: 300,
        money: 7,
        radius: 500
    },
    {
        name: 'option1',
        basixDame: 600,
        money: 15,
        radius: 450
    }
]
let mousemove = {
    x: '',
    y: ''
}
image.src = 'src/img/gameMap.png'
const placementTiles = hanleLocationDataBuilding()
let enemyes = spawnEnemies(4, 100, 10, 40, 'blue', 2000, 2, 5)
console.log(enemyes)
const buildings = []


image.onload = () => {
    animate()
}

function animate() {
    const animationFrame = requestAnimationFrame(animate)
    ctx.drawImage(image, 0, 0)
    for (let i = 0; i < enemyes.length; i++) {
        const enemy = enemyes[i]
        enemy.update()
    }

    // hiển thị vị trí đặt tháp phòng thủ
    placementTiles.forEach(value => {
        value.update()
    })

    buildings.forEach(building => {
        building.update()
        const validEnemies = enemyes.filter(enemy => {
            return distance(building, enemy) < enemy.radius + building.radius
        })
        building.target = validEnemies[0]

        // xác định khi  đạn và đối tượng chạm vào nhau
        for (let i = 0; i < building.projectiles.length; i++) {
            const projectile = building.projectiles[i]

            projectile.update()
            if (distance(projectile.enemy, projectile) < projectile.enemy.radius + projectile.radius) {
                projectile.enemy.takeDamage += (100 / (projectile.enemy.health / projectile.initDame))
                building.projectiles.splice(i, 1)

                if (projectile.enemy.takeDamage >= 100) {
                    let indexEnemy = enemyes.findIndex((value) => {
                        return projectile.enemy === value
                    })
                    if (indexEnemy > -1) {
                        enemyes.splice(indexEnemy, 1)
                    }

                    initMoney += projectile.enemy.money
                    moneyCount.innerHTML = ` ${initMoney}`
                    projectile.enemy.takeDamage = 100
                    if (enemyes.length === 0) {
                        enemyes = spawnEnemies(10, 100, 10, 40, 'blue', hahahihi += 1000, 6, 5)
                    }
                }
            }
        }
    })
    enemyes.forEach((value, index) => {
        if (value.position.x > canvas.width) {
            enemyes.splice(index, 1)
            heart--
            if (heart >= 10) {
                heartCount.innerHTML = ' ' + heart
            } else {
                heartCount.innerHTML = ` 0${heart}`

            }
            if (heart === 0) {
                gameOver.style = ' display: flex;'
                cancelAnimationFrame(animationFrame)
            }
            if (enemyes.length === 0) {
                enemyes = spawnEnemies(10, 100, 10, 40, 'blue', hahahihi += 500, 6, 3)
            }
        }
    })

}

//handle function
function hanleLocationDataBuilding() {
    const data = []
    let locationData = handleLocationMap(30)

    locationData.forEach((value, y) => {
        value.forEach((value, x) => {
            if (value === 20) {
                data.push(new PlacementTile({x: x * 64, y: y * 64}, 'rgb(208,195,195,0.05)'))
            }
        })
    })
    return data
}


function spawnEnemies(enemy, width, height, radius, color, health, speed, money) {
    const waypoint = waypoints_Enemi[0]
    let enemyesArray = []
    let distance = 150
    for (let i = 0; i < enemy; i++) {
        enemyesArray.push(new Enemy({
            x: waypoint.x - (distance * i),
            y: waypoint.y
        }, width, height, radius, color, health + i, speed, money))
    }
    return enemyesArray
}


function handleLocationMap(row) {
    const data = []
    for (let i = 0; i < array.length; i += row) {
        if (array[i] === 20) {
        }
        data.push(array.slice(i, i + row))
    }
    return data
}

function distance(object1, object2) {
    const xDistance = object1.position.x - object2.position.x  // mục tiêu di chuyển đến sẽ là x2
    const yDistance = object1.position.y - object2.position.y
    return Math.hypot(xDistance, yDistance)

}

function optionHome(key) {
    return listHome.find(value => value.name === key)
}

// sử lý sự kiện window
window.addEventListener('mousemove', handleMousemoveCanvas)
window.addEventListener('click', handleClickCanvas)


function handleMousemoveCanvas(event) {

    mousemove = {
        x: event.clientX,
        y: event.clientY
    }
    placementTiles.forEach(value => {
        if (
            mousemove.x >= value.position.x &&
            mousemove.x <= value.position.x + value.size &&
            mousemove.y >= value.position.y &&
            mousemove.y <= value.position.y + value.size

        ) {
            value.color = 'rgba(255,255,255,0.7)'

        } else {
            value.color = 'rgb(208,195,195,0.2)'
        }
    })
}

function handleClickCanvas() {

    placementTiles.forEach(placementTile => {
        if (
            mousemove.x >= placementTile.position.x &&
            mousemove.x <= placementTile.position.x + placementTile.size &&
            mousemove.y >= placementTile.position.y &&
            mousemove.y <= placementTile.position.y + placementTile.size
        ) {
            // chua hoan thien chon enemy
            let item = optionHome('option2')
            if (!placementTile.check && (initMoney >= item.money)) {
                initMoney -= item.money
                placementTile.check = true
                moneyCount.innerHTML = ` ${initMoney}`
                if (initMoney < 10) {
                    moneyCount.innerHTML = '  ' + ` 0${initMoney}`
                }
                buildings.push(new Building({
                    x: placementTile.position.x,
                    y: placementTile.position.y
                }, (placementTile.size * 2), placementTile.size, item.radius, 'red', item.basixDame, item.money))
            }
        }
    })
}

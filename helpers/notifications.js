import { AsyncStorage } from 'react-native'
import { Notifications } from 'expo'
import { askAsync, NOTIFICATIONS } from 'expo-permissions'

const NOTIFICATION_KEY = 'flixcards:notifications'

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
    return {
        title: "Don't forget to study!",
        body: 'Your flixcards are waiting for you!',
        ios: {
            sound: false,
        },
        android: {
            sound: false,
            priority: 'low',
            sticky: false,
            vibrate: false,
        },
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then(data => {
            if (data === null) {
                askAsync(NOTIFICATIONS).then(({ status }) => {
                    if (status === 'granted') {
                        Notifications.cancelAllScheduledNotificationsAsync()

                        const tomorrow = new Date()
                        tomorrow.setDate(tomorrow.getDate() + 1)
                        tomorrow.setHours(19)
                        tomorrow.setMinutes(0)

                        Notifications.scheduleLocalNotificationAsync(createNotification(), {
                            time: tomorrow,
                            repeat: 'day',
                        })

                        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                    }
                })
            }
        })
}

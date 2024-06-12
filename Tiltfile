version_settings(constraint='>=0.22.1')

load('ext://secret', 'secret_create_generic')

docker_compose('./locals/docker-compose.yml', env_file="./.env")

secret_create_generic("social-ms-secret", from_env_file="./.env")

docker_build(
    'auth',
    context='.',
    dockerfile='./apps/auth/docker/Dockerfile',
    target='dev',
    live_update=[
        sync('./apps/auth', '/app/apps/auth'),
    ],
    ignore=[
        "./locals/tmp",
        "./.nx"
    ]
)

k8s_yaml('./apps/auth/k8s/depl.yaml')
k8s_yaml('./apps/auth/k8s/service.yaml')

k8s_resource('auth', port_forwards=3000, labels=['services'])
dc_resource('postgresql', labels=['database'])

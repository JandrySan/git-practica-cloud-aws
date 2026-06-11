# Restaurante Familia Sánchez — Full Stack con CI/CD

## ⚙️ Secrets que debes configurar en GitHub

Ve a tu repo → Settings → Secrets and variables → Actions → New repository secret

| Secret | Valor |
|--------|-------|
| `AWS_ACCESS_KEY_ID` | Access Key del usuario IAM de AWS |
| `AWS_SECRET_ACCESS_KEY` | Secret Key del usuario IAM de AWS |
| `GCP_SA_KEY` | JSON de la cuenta de servicio de GCP |

## 🔧 Pasos pendientes antes de que funcione

1. **En `frontend/index.html`**: reemplaza `TU-URL-DE-AWS.elasticbeanstalk.com` con la URL real de tu app en Elastic Beanstalk.
2. **En `.github/workflows/deploy-frontend.yml`**: reemplaza `TU_PROJECT_ID` con tu ID de proyecto GCP.
3. **En `.github/workflows/deploy-backend.yml`**: verifica que `application_name` y `environment_name` coincidan con los que crees en Elastic Beanstalk.

## 🚀 Endpoints del Backend

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Info de la API |

| GET | `/health` | Health check para AWS |
| POST | `/reserva` | Crear una reserva |
| GET | `/reservas` | Listar todas las reservas |

## Ejemplo de petición al backend

```json
POST /reserva
{
  "nombre": "Juan Pérez",
  "fecha": "2026-06-20",
  "personas": "4",
  "telefono": "0991234567"
}
```

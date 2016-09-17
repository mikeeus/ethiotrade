class ExportsController < ApplicationController
  before_action :set_export, only: [:show, :update, :destroy]

  # GET /exports
  def index
    @exports = Export.all

    render json: @exports
  end

  # GET /exports/1
  def show
    render json: @export
  end

  # POST /exports
  def create
    @export = Export.new(export_params)

    if @export.save
      render json: @export, status: :created, location: @export
    else
      render json: @export.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /exports/1
  def update
    if @export.update(export_params)
      render json: @export
    else
      render json: @export.errors, status: :unprocessable_entity
    end
  end

  # DELETE /exports/1
  def destroy
    @export.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_export
      @export = Export.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def export_params
      params.fetch(:export, {})
    end
end
